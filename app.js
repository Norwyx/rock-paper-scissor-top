// Array of options
const OPTIONS = ['Rock', 'Paper', 'Scissors'];

// Get a random number
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// With a random number from the getRandomInt function, index into the array and get the computer choice
function getComputerChoice () {
    let randomChoice = OPTIONS[getRandomInt(3)];
    return randomChoice;
}

// Computer input
let computerChoice = getComputerChoice()

// Get user input and capitalize it 
let userInput = 'rock';
let userChoice = userInput.charAt(0).toUpperCase() + userInput.slice(1);


console.log(userChoice);
console.log(computerChoice);
console.log(playRound(userChoice, computerChoice))