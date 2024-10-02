const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numberOfPlayers; // Declare a variable to store the number of players

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to get the number of players
function numPlayers(callback) {
    rl.question('Enter the number of players: ', (input) => {
        const inputNumber = parseInt(input, 10);
        if (!isNaN(inputNumber) && inputNumber > 0) { // No upper limit
            numberOfPlayers = inputNumber; // Store the number of players in the outer variable
            console.log('There are ' + numberOfPlayers + ' players.');
            callback(); // Proceed without passing numberOfPlayers
        } else {
            console.log("Please enter a valid number of players.");
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
    const playerData = {}; // Change to an object to store names and additional data
    let count = 0;

    function askForName() {
        if (count < numberOfPlayers) {
            rl.question(`Enter the name of player ${count + 1}: `, (name) => {
                if (isValidName(name)) {
                    // Check for duplicate names
                    if (!playerData[name]) {
                        playerData[name] = { role: null, state: 'living'}; // Placeholder for role
                        count++;
                        askForName(); // Ask for the next name
                    } else {
                        console.log("\n\nName already taken. Please enter a different name.\n");
                        askForName(); // Re-prompt for the same player
                    }
                } else {
                    console.log("\n\nName cannot be blank or a single character (number included).\nPlease enter at least two letters.\n");
                    askForName(); // Re-prompt for the same player
                }
            });
        } else {
            // Prepare roles
            const roles = [];
            const mafiaLimit = Math.min(2, Math.floor(numberOfPlayers / 3)); // Max 2 or 1/3 of players
            for (let i = 0; i < mafiaLimit; i++) roles.push("mafia");
            roles.push("doctor"); // Ensure 1 doctor
            roles.push("detective"); // Ensure 1 detective
            const townspeopleCount = numberOfPlayers - roles.length;
            for (let i = 0; i < townspeopleCount; i++) roles.push("townspeople");

            // Shuffle roles for random assignment
            shuffleArray(roles);

            // Assign roles randomly
            const playerNames = Object.keys(playerData);
            for (let i = 0; i < playerNames.length; i++) {
                playerData[playerNames[i]].role = roles[i];
            }

            console.log("Player Data:", playerData); // Display the full dictionary with roles and additional values
            rl.close(); // Exit the interface
        }
    }

    askForName(); // Start asking for names
}

// Start the process
numPlayers(askForNames);
