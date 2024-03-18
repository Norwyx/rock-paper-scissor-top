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

// Play round 
function playRound(userChoice, computerChoice) {
    if (userChoice == 'Rock' && computerChoice == 'Scissors') {
        return('User wins! Rock beats scissors');
    }
    else if (userChoice == 'Paper' && computerChoice == 'Rock') {
        return('User wins! Paper beats rock');
    }
    else if (userChoice == 'Scissors' && computerChoice == 'Paper') {
        return('User wins! Scissors beat paper');
    }
    if (userChoice == 'Scissors' && computerChoice == 'Rock') {
        return('Computer wins! Rock beats scissors');
    }
    else if (userChoice == 'Rock' && computerChoice == 'Paper') {
        return('Computer wins! Paper beats rock');
    }
    else if (userChoice == 'Paper' && computerChoice == 'Scissors') {
        return('Computer wins! Scissors beat paper');
    }
    else {
        return('Tie! Both users picked the same');
    }
}


console.log(userChoice);
console.log(computerChoice);
console.log(playRound(userChoice, computerChoice))