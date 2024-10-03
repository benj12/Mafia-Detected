const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numberOfPlayers; // Declare a variable to store the number of players
let victims = []; // Variable to store the mafia's victim
let doctorChoice; // Variable to store the doctor's choice

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to get the number of players
function numPlayers(callback) {
    rl.question('Enter the number of players (4 to 15): ', (input) => {
        const inputNumber = parseInt(input, 10);
        if (!isNaN(inputNumber) && inputNumber >= 4 && inputNumber <= 15) {
            numberOfPlayers = inputNumber; // Store the number of players in the outer variable
            callback(); // Proceed without passing numberOfPlayers
        } else {
            console.log("Please enter a valid number of players (between 4 inclusive and 15 inclusive).");
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
function game() {
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

            // Start the game
            startNightPhase(playerData);
        }
    }

    askForName();
}

function startNightPhase(playerData) {
    nightPhase(playerData);
}







function nightPhase(playerData) {
    const mafiaPlayers = [];
    const normalPeople = [];

    // Separate players into mafia and normal roles
    for (const player in playerData) {
        if (playerData[player].role === "mafia" && playerData[player].state === "living") {
            mafiaPlayers.push(player);
        } else if ((playerData[player].role === "detective" || playerData[player].role === "doctor" || playerData[player].role === "townspeople") && playerData[player].state === "living"){
            normalPeople.push(player);
        }
    }

    console.log("Everyone go to sleep...\n\n");
    console.log("Mafia wake up...");
    console.log("Who do you want to kill?\n");
    console.log("Player names (not mafia): ", normalPeople);

    const promptForVictims = (index) => {
        if (index < mafiaPlayers.length) {
            const mafiaPlayer = mafiaPlayers[index];

            rl.question(`Mafia (${mafiaPlayer}), who do you want to kill? (enter name): `, (inputVictim) => {
                if (normalPeople.includes(inputVictim)) {
                    victims.push(inputVictim); // Store the victim
                    console.log(`Mafia ${mafiaPlayer} has chosen to kill: ${inputVictim}`);
                    promptForVictims(index + 1); // Proceed to the next mafia player
                } else if (mafiaPlayers.includes(inputVictim)) {
                    console.log("You can't kill your teammate or yourself. Please choose a different victim.\n");
                    promptForVictims(index); // Re-prompt the same mafia player
                } else {
                    console.log("Invalid name. Please choose from the list of normal players.\n");
                    promptForVictims(index); // Re-prompt the same mafia player
                }
            });
        } else {
            // All mafia players have made their choices, proceed to save logic
            promptForWhoToSave(victims, playerData);
        }
    };

    promptForVictims(0); // Start prompting from the first mafia player
} 


// Function for the doctor to choose whom to save
function promptForWhoToSave(victims, playerData) {
    const doctorName = Object.keys(playerData).find(player => playerData[player].role === "doctor");

    if (playerData[doctorName].state === "dead") {
        promptForDetective(playerData);
    } else {
        const savePrompt = (index) => {
            if (index < victims.length) {
                rl.question(`Doctor ${doctorName}, who do you want to save?\n`, (input) => {
                    if (input === doctorName) {
                        console.log(`${doctorName} chose to save himself.`);
                        playerData[doctorName].state = "living"; // Doctor saves themselves
                        // Mark other victims as dead
                        victims.forEach(victim => {
                            if (victim !== doctorName) {
                                playerData[victim].state = "dead"; // Mark victim as dead
                                console.log(`${victim} has been killed by the mafia.`);
                            }
                        });
                        promptForDetective(playerData); // Proceed to detective phase
                    } else if (victims.includes(input)) {
                        console.log(`Doctor ${doctorName} chose to save ${input}.`);
                        playerData[input].state = "living"; // Mark saved victim as living
                        // Mark the other victims as dead
                        victims.forEach(victim => {
                            if (victim !== input) {
                                playerData[victim].state = "dead"; // Mark other victims as dead
                                console.log(`${victim} has been killed by the mafia.`);
                            }
                        });
                        promptForDetective(playerData); // Proceed to detective phase
                    } else {
                        console.log("Invalid choice. Please select a valid player to save.");
                        savePrompt(index); // Re-prompt if invalid
                    }
                });
            } else {
                // If there are no more victims to choose from, proceed to the detective phase
                promptForDetective(playerData);
            }
        };
        savePrompt(0); // Start prompting from the first victim
    }
}


// Function for the detective to inquire about a player
function promptForDetective(playerData) {
    const detectiveName = Object.keys(playerData).find(player => playerData[player].role === "detective");

    if (playerData[detectiveName].state === "dead") {
        dayPhase(playerData); // If detective is dead, skip directly to day phase
    } else {
        rl.question(`Detective ${detectiveName}, who do you want to find out about? `, (input) => {
            if (playerData[input]) {
                if (playerData[input].state === 'dead') {
                    console.log(`Detective, ${input} is already dead. You cannot vote based on a dead player.`);
                    dayPhase(playerData); // Proceed without detective's input
                } else {
                    // Valid living suspect
                    if (playerData[input].role === "doctor" || playerData[input].role === "townspeople" || playerData[input].role === "detective") {
                        console.log(`Detective, ${input} is innocent.`);
                        dayPhase(playerData, input);
                    } else {
                        console.log(`Detective, ${input} is guilty.`);
                        dayPhase(playerData, input);
                    }
                }
            } else {
                console.log("Invalid choice. Please select a valid player.");
                return promptForDetective(playerData); // Re-prompt if invalid
            }
        });
    }
}

function dayPhase(playerData) {
    const detective = Object.keys(playerData).find(player => playerData[player].role === "detective");

    console.log("\n\nIt is now day time, everyone will vote on who to kill...\n\n");

    if (playerData[detective].state === "dead") {
        console.log("The detective is dead. The townspeople will vote without the detective's input.");
        gatherVotes(playerData, null); // No suspicions from the detective
    } else {
        const suspicionsPrompt = () => {
            rl.question(`Detective ${detective}, who do you have suspicions about? `, (suspectedPlayer) => {
                if (playerData[suspectedPlayer] && playerData[suspectedPlayer].state === 'living') {
                    console.log(`Detective suspects ${suspectedPlayer}.`);
                    gatherVotes(playerData, suspectedPlayer);
                } else {
                    console.log("Invalid choice or the player is dead. Try again.\n\n");
                    suspicionsPrompt();
                }
            });
        };
        suspicionsPrompt();
    }

    function gatherVotes(playerData, detectiveSuspect) {
        const livingPeople = Object.keys(playerData).filter(player =>
            (playerData[player].role === "townspeople" ||
                playerData[player].role === "doctor" ||
                playerData[player].role === "detective" ||
                playerData[player].role === "mafia") &&
            playerData[player].state === "living"
        );

        const votes = {};

        const askForVote = (index) => {
            if (index < livingPeople.length) {
                const voter = livingPeople[index];
                rl.question(`${voter}, who do you vote to kill? `, (vote) => {
                    if (playerData[vote] && playerData[vote].state === 'living') {
                        votes[vote] = (votes[vote] || 0) + 1; // Increment vote count for the selected player
                        askForVote(index + 1); // Move to the next voter
                    } else if (playerData[vote] && playerData[vote].state === 'dead') {
                        console.log(`You cannot vote for ${vote} because he is already dead. Please choose a living player.`);
                        askForVote(index); // Reprompt the same voter
                    } else if (vote === "skip" || vote === "Skip" || vote === "nobody" || vote === "Nobody"){
                        askForVote(index+1);
                    }
                    else {
                        console.log("Invalid choice. Please select a living player.");
                        askForVote(index); // Reprompt the same voter
                    }
                });
            } else {
                // All votes have been collected, determine the victim
                determineKilling(votes, playerData);
            }
        };

        askForVote(0); // Start asking votes from the first innocent
    }

    function determineKilling(votes, playerData) {
        let highestVotes = 0;
        let victims = [];

        // Determine the highest votes and the corresponding victims
        for (const player in votes) {
            if (votes[player] > highestVotes) {
                highestVotes = votes[player];
                victims = [player];
            } else if (votes[player] === highestVotes) {
                victims.push(player); // Handle ties
            }
        }

        // Check for majority
        const totalPeople = Object.keys(playerData).filter(player =>
            (playerData[player].role === "townspeople" ||
                playerData[player].role === "doctor" ||
                playerData[player].role === "detective" ||
                playerData[player].role === "mafia") &&
            playerData[player].state === "living"
        ).length;

        // A majority is more than half
        const majorityNeeded = Math.floor(totalPeople / 2) + 1;

        // Only log the result once
        if (highestVotes >= majorityNeeded) {
            if (victims.length > 1) {
                // Tie situation
                console.log("There was a tie in the voting. No one will be killed.");
            } else {
                // Proceed to kill the player with the highest votes
                console.log(`The townspeople have voted to kill: ${victims.join(", ")}`);
                victims.forEach(victim => {
                    playerData[victim].state = "dead"; // Mark the victim as dead
                });
                // Check if mafia is the same amount or outnumbers the innocent
                if (areAllMafiaDead(playerData)) {
                    gameOverForMafia();
                } else if (areAllTownspeopleAndMafiaEqual(playerData)) {
                    gameOverForTownspeople();
                } else {
                    startNightPhase(playerData); // Proceed to the next night phase
                }
            }
        } else {
            console.log("No one received enough votes to be killed. Everyone stays alive.");
            startNightPhase(playerData); // Proceed to the next night phase
        }
    }
}

function areAllTownspeopleAndMafiaEqual(playerData) {
    let mafiaCount = 0;
    let townspeopleCount = 0;
    for (const player in playerData) {
        if ((playerData[player].role === "detective" || playerData[player].role === "doctor" || playerData[player].role === "townspeople") && playerData[player].state === "living") {
            townspeopleCount++;
        } else if (playerData[player].role === "mafia" && playerData[player].state === "living") {
            mafiaCount++;
        }
    }
    return townspeopleCount === mafiaCount;
}

function areAllMafiaDead(playerData) {
    // Get all players with the role of "mafia"
    const mafiaPlayers = Object.keys(playerData).filter(player => playerData[player].role === "mafia");

    // Check if all mafia players are dead
    return mafiaPlayers.every(player => playerData[player].state === "dead");
}

function gameOverForMafia() {
    // Logic to determine the game over state can be added here
    console.log("The townspeople have won and all of the mafia members are dead...\n\nGame Over...\n");
    rl.close();
}

function gameOverForTownspeople() {
    console.log("The mafia has won...\n\nGame Over...\n");
    rl.close();
}

// Start the process
numPlayers(game);

