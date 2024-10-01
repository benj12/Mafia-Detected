//ask for user input of how many players
// const players = prompt("How many players are playing in Mafia today?\n");
// console.log("There are " + players + " players playing today");


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('How many players? ', (answer) => {
    console.log(`Hello, ${answer}!`);
    rl.close();
});
