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
        roundWinner = 'tie'
    }

    if ((userChoice == 'Rock' && computerChoice == 'Scissors') || 
        (userChoice == 'Paper' && computerChoice == 'Rock') || 
        (userChoice == 'Scissors' && computerChoice == 'Paper')
    ) {
        userScore++;
        roundWinner = 'user';
    }
    
    if ((userChoice == 'Scissors' && computerChoice == 'Rock') || 
        (userChoice == 'Rock' && computerChoice == 'Paper') || 
        (userChoice == 'Paper' && computerChoice == 'Scissors')
    ) {
        computerScore++;
        roundWinner = 'computer';
    }
}

function isGameOver() {
    return userScore === 5 || computerScore === 5;
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
const modalBtn = document.querySelector('.modal__play-again');
const overlay = document.querySelector('.overlay');

rockBtn.addEventListener('click', () => handleClick('Rock'));
paperBtn.addEventListener('click', () => handleClick('Paper'));
scissorsBtn.addEventListener('click', () => handleClick('Scissors'));
modalBtn.addEventListener('click', () => restartGame());
overlay.addEventListener('click', () => toggleModal());

function handleClick (userChoice) {
    if (isGameOver()) {
        toggleModal();
        return;
    }

    let computerChoice = getRandomChoice();
    playRound(userChoice, computerChoice);
    updateChoiceDiv(userChoice, computerChoice);
    updateScore(userChoice, computerChoice)

    if (isGameOver()) {
        toggleModal();
        findWinner();
        return;
    }
}

function updateChoiceDiv (userChoice, computerChoice) {
    switch (userChoice) {
        case 'Rock':
            userChoiceDiv.textContent = '✊🏻';
            break;
        case 'Paper':
            userChoiceDiv.textContent = '✋🏻';
            break;
        case 'Scissors':
            userChoiceDiv.textContent = '✌🏻';
            break;
    }

    switch (computerChoice) {
        case 'Rock':
            computerChoiceDiv.textContent = '✊🏻';
            break;
        case 'Paper':
            computerChoiceDiv.textContent = '✋🏻';
            break;
        case 'Scissors':
            computerChoiceDiv.textContent = '✌🏻';
            break;
    }
}

function updateScore (userChoice, computerChoice) {
    if (roundWinner === 'tie') {
        scoreboardMsg.textContent = 'Tie! Both users picked the same'
    }
    else if (roundWinner === 'user') {
        scoreboardMsg.textContent = `User wins! ${userChoice} beats ${computerChoice}`
    }
    else if (roundWinner === 'computer') {
        scoreboardMsg.textContent = `Computer wins! ${computerChoice} beats ${userChoice}`
    }

    userScoreDiv.textContent = userScore;
    computerScoreDiv.textContent = computerScore;
}

function toggleModal () {
    modal.classList.toggle('hidden')
    overlay.classList.toggle('hidden')
}

function findWinner () {
    return userScore > computerScore ? (modalMsg.textContent = 'won!') : (modalMsg.textContent = 'lost...')
}

function restartGame () {
    toggleModal();
    userScore = 0;
    computerScore = 0;
    userChoiceDiv.textContent = '❓';
    computerChoiceDiv.textContent = '❓';
    scoreboardMsg.textContent = 'First one to get 5 points wins the game';
    userScoreDiv.textContent = 0;
    computerScoreDiv.textContent = 0;
}