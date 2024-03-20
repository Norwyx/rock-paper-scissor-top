//Game
let userScore = 0;
let computerScore = 0;
let roundWinner = '';

function getRandomChoice () {
    let randomChoice = Math.floor(Math.random() * 3);
    switch (randomChoice) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors';
    }
}

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
        computerScore++;
        userScore++;
        return('Tie! Both users picked the same');
    }
}

function playGame(rounds) {
    for(let i = 0; i < rounds; i++) {
        let userInput = prompt('Enter your choice: ');
        let userChoice = userInput.charAt(0).toUpperCase() + userInput.slice(1);

        let computerChoice = getComputerChoice()  
        
        console.log(playRound(userChoice, computerChoice)); 
    }
    console.log(findWinner(userScore, computerScore));
}

function findWinner(userScore, computerScore) {
    if (userScore > computerScore) {
        return ('User wins!');
    }
    else if (userScore < computerScore) {
        return ('Computer wins!');
    }
    else {
        return ('Tie!')
    }
}



// UI
const btns = document.querySelectorAll('.choices__btn');
const choiceDivs = document.querySelectorAll('.score__element');
const userChoiceDiv = document.getElementById('user-choice');
const computerChoiceDiv = document.getElementById('computer-choice');
const userScoreDiv = document.getElementById('user-score');
const computerScoreDiv = document.getElementById('computer-score');
const scoreboardMsg = document.querySelector('.scoreboard__message');