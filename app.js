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
    if (userChoice === computerChoice) {
        computerScore++;
        userScore++;
        roundWinner = 'tie'
        return('Tie! Both users picked the same')
    }

    if ((userChoice == 'Rock' && computerChoice == 'Scissors') || 
        (userChoice == 'Paper' && computerChoice == 'Rock') || 
        (userChoice == 'Scissors' && computerChoice == 'Paper')
    ) {
        userScore++;
        roundWinner = 'user';
        return('User wins!');
    }
    
    if ((userChoice == 'Scissors' && computerChoice == 'Rock') || 
        (userChoice == 'Rock' && computerChoice == 'Paper') || 
        (userChoice == 'Paper' && computerChoice == 'Scissors')
    ) {
        userScore++;
        roundWinner = 'computer';
        return('Computer wins!');
    }
}

function isGameOver() {
    return userScore === 5 || computerScore === 5;
}

function capitalizeFirstLetter (string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase;
}



// UI
const scoreboardMsg = document.querySelector('.scoreboard__message');
const userChoiceDiv = document.getElementById('user-choice');
const computerChoiceDiv = document.getElementById('computer-choice');
const userScoreDiv = document.getElementById('user-score');
const computerScoreDiv = document.getElementById('computer-score');
const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');
const modal = document.querySelector('.modal');
const modalMsg = document.getElementById('modal-message')
const overlay = document.querySelector('.overlay');