// Constants
const OPTIONS = ['Rock', 'Paper', 'Scissors'];
let userScore = 0;
let computerScore = 0;

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

// Play round 
function playRound(userChoice, computerChoice) {
    if (userChoice == 'Rock' && computerChoice == 'Scissors') {
        userScore++;
        return('User wins! Rock beats scissors');
    }
    else if (userChoice == 'Paper' && computerChoice == 'Rock') {
        userScore++;
        return('User wins! Paper beats rock');
    }
    else if (userChoice == 'Scissors' && computerChoice == 'Paper') {
        userScore++;
        return('User wins! Scissors beat paper');
    }
    if (userChoice == 'Scissors' && computerChoice == 'Rock') {
        computerScore++;
        return('Computer wins! Rock beats scissors');
    }
    else if (userChoice == 'Rock' && computerChoice == 'Paper') {
        computerScore++;
        return('Computer wins! Paper beats rock');
    }
    else if (userChoice == 'Paper' && computerChoice == 'Scissors') {
        computerScore++;
        return('Computer wins! Scissors beat paper');
    }
    else {
        return('Tie! Both users picked the same');
    }
}

// Play game
function playGame(rounds) {
    // Play the game X amount of times
    for(let i = 0; i < rounds; i++) {
        // Get user input and capitalize it
        let userInput = prompt('Enter your choice: ');
        let userChoice = userInput.charAt(0).toUpperCase() + userInput.slice(1);
        // Generate random computer choice
        let computerChoice = getComputerChoice()    
        // Print out the result of each round
        console.log(playRound(userChoice, computerChoice)); 
    }
}

console.log(playGame(5))