const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numberOfPlayers; // Declare a variable to store the number of players
let victim; // Variable to store the mafia's victim
let doctorChoice; // Variable to store the doctor's choice

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to get the number of players
function numPlayers(callback) {
    rl.question('Enter the number of players (minimum 4): ', (input) => {
        const inputNumber = parseInt(input, 10);
        if (!isNaN(inputNumber) && inputNumber >= 4) {
            numberOfPlayers = inputNumber; // Store the number of players in the outer variable
            callback(); // Proceed without passing numberOfPlayers
        } else {
            console.log("Please enter a valid number of players (at least 4).");
            numPlayers(callback); // Re-prompt
        }
    });
}

// Function to validate the player's name
function isValidName(name) {
    const namePattern = /^[a-zA-Z]{2,}$/; // Only letters and at least 2 characters
    return namePattern.test(name);
}

// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = getRandomNumber(0, i);
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Function to ask for player names
function askForNames() {
    const playerData = {};
    let count = 0;

    function askForName() {
        if (count < numberOfPlayers) {
            rl.question(`Enter the name of player ${count + 1}: `, (name) => {
                if (isValidName(name)) {
                    if (!playerData[name]) {
                        playerData[name] = { role: null, state: 'living' };
                        count++;
                        askForName();
                    } else {
                        console.log("\n\nName already taken. Please enter a different name.\n");
                        askForName();
                    }
                } else {
                    console.log("\n\nName cannot be blank or a single character (number included).\nPlease enter at least two letters.\n");
                    askForName();
                }
            });
        } else {
            // Prepare roles
            const roles = [];
            const mafiaLimit = Math.min(2, Math.floor(numberOfPlayers / 3));
            for (let i = 0; i < mafiaLimit; i++) roles.push("mafia");
            roles.push("doctor");
            roles.push("detective");
            const townspeopleCount = numberOfPlayers - roles.length;
            for (let i = 0; i < townspeopleCount; i++) roles.push("townspeople");

            shuffleArray(roles);

            const playerNames = Object.keys(playerData);
            for (let i = 0; i < playerNames.length; i++) {
                playerData[playerNames[i]].role = roles[i];
            }

            console.log("Player Data:", playerData);

            // Night phase
            const mafiaPlayers = [];
            const normalPeople = [];
            for (const player in playerData) {
                if (playerData[player].role === "mafia") {
                    mafiaPlayers.push(player);
                } else {
                    normalPeople.push(player);
                }
            }

            console.log("Everyone go to sleep...\n\n");
            console.log("Mafia wake up...");
            console.log("Who do you want to kill?\n");
            console.log("Player names (not mafia): ", normalPeople);

            if (mafiaPlayers.length === 1) {
                const mafiaPlayer = mafiaPlayers[0];

                const promptForVictim = () => {
                    rl.question(`Mafia (${mafiaPlayer}), who do you want to kill? (enter name): `, (inputVictim) => {
                        if (normalPeople.includes(inputVictim)) {
                            victim = inputVictim; // Store the victim
                            console.log(`Mafia has chosen to kill: ${victim}`);
                            promptForWhoToSave(playerData);
                        } else if (mafiaPlayers.includes(inputVictim)) {
                            console.log("You can't kill your teammate or yourself. Please choose a different victim.\n");
                            promptForVictim();
                        } else {
                            console.log("Invalid name. Please choose from the list of normal players.\n");
                            promptForVictim();
                        }
                    });
                };

                promptForVictim();
            } else {
                console.log("Multiple mafia players detected. Logic for handling multiple mafia roles is not implemented yet.");
                rl.close();
            }
        }
    }

    askForName();
}

// Function for the doctor to choose whom to save
function promptForWhoToSave(playerData) {
    const doctorName = Object.keys(playerData).find(player => playerData[player].role === "doctor");
    rl.question(`Doctor ${doctorName}, who do you want to save?\n`, (input) => {
        if (input === doctorName) {
            doctorChoice = doctorName; // Store doctor's choice
        } else if (playerData[input]) {
            doctorChoice = input; // Store doctor's choice
        } else {
            console.log("Invalid choice. Please select a valid player to save.");
            return promptForWhoToSave(playerData); // Re-prompt if invalid
        }

        // Combined output message
        let outputMessage = "";

        if (doctorChoice === victim) {
            outputMessage += "The doctor saved the same person the mafia wanted to kill. ";
            playerData[doctorChoice].state = "living";
        } else if (doctorChoice === doctorName) {
            outputMessage += `${doctorName} saved himself, `;
            playerData[victim].state = "dead";
        } else {
            outputMessage += `${doctorName} saved ${doctorChoice}, `;
            playerData[victim].state = "dead";
        }

        outputMessage += `while the mafia killed ${victim}.`;
        console.log(outputMessage);
        console.log(`State of victim ${victim} is ${playerData[victim].state}`);

        rl.close(); // Exit the interface
    });
}

// Start the process
numPlayers(askForNames);
