const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numberOfPlayers; // Declare a variable to store the number of players
let mafiaCount = 0;
let detectiveCount = 0;
let doctorCount = 0;

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

// Function to ask for player names
function askForNames() {
    const playerData = {}; // Change to an object to store names and additional data
    let count = 0;

    function assignRole() {
        let role;

        // Adjust role assignment based on total players
        const mafiaLimit = Math.min(2, Math.floor(numberOfPlayers / 3)); // Max 2 or 1/3 of players
        const rand = getRandomNumber(1, 4); // Generate a random number between 1 and 4

        // Determine role based on random number and counts
        if (mafiaCount < mafiaLimit && rand === 1) {
            role = "mafia";
            mafiaCount++;
        } else if (doctorCount === 0) { // Ensure at least 1 doctor
            role = "doctor";
            doctorCount++;
        } else if (detectiveCount === 0) { // Ensure at least 1 detective
            role = "detective";
            detectiveCount++;
        } else {
            role = "townspeople"; // Default role
        }
        return role;
    }

    function askForName() {
        if (count < numberOfPlayers) {
            rl.question(`Enter the name of player ${count + 1}: `, (name) => {
                if (isValidName(name)) {
                    // Check for duplicate names
                    if (!playerData[name]) {
                        const assignedRole = assignRole(); // Assign a role
                        // Add additional value (e.g., score, health) to the player's data
                        playerData[name] = { role: assignedRole, state: 'living' }; // Example additional value
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
            // After assigning roles, ensure there is at least 1 doctor and 1 detective
            if (doctorCount === 0) {
                const randomDoctorName = Object.keys(playerData)[getRandomNumber(0, count - 1)];
                playerData[randomDoctorName].role = "doctor"; // Assign doctor role
            }
            if (detectiveCount === 0) {
                const randomDetectiveName = Object.keys(playerData)[getRandomNumber(0, count - 1)];
                playerData[randomDetectiveName].role = "detective"; // Assign detective role
            }

            console.log("Player Data:", playerData); // Display the full dictionary with roles and additional values
            rl.close(); // Exit the interface
        }
    }

    askForName(); // Start asking for names
}

// Start the process
numPlayers(askForNames);
