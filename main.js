//ask for user input of how many players

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});




function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to get the number of players
function numPlayers(callback) {
    rl.question('Enter the number of players: ', (input) => {
        const numberOfPlayers = parseInt(input, 10);
        if (!isNaN(numberOfPlayers) && numberOfPlayers > 0 && numberOfPlayers <= 15) {
            console.log('There are ' + numberOfPlayers + ' players.');
            callback(numberOfPlayers); // Proceed with valid number
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
// Function to ask for player names
function askForNames(numberOfPlayers) {
    const playerNames = [];
    let count = 0;

    function askForName() {
        if (count < numberOfPlayers) {
            rl.question(`Enter the name of player ${count + 1}: `, (name) => {
                if (isValidName(name)) {
                    playerNames.push(name);
                    count++;
                    askForName(); // Ask for the next name
                } else {
                    console.log("\n\nName cannot be blank or a single character (number included).\nPlease enter at least two letters.\n");
                    askForName(); // Re-prompt for the same player
                }
            });
        } else {
            console.log("Player Names:", playerNames);
            const randNum = getRandomNumber(1, numberOfPlayers);
            console.log(randNum);
            rl.close(); // Exit the interface
        }
    }

    askForName(); // Start asking for names
}

// Start the process
numPlayers(askForNames); // Get the number of players and proceed to ask for names



