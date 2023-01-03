
let playerScore = 0
let computerScore = 0
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const outcomeDiv = document.querySelector('.outcome');
const playerScoreSpan = document.querySelector('.player-score');
const computerScoreSpan = document.querySelector('.computer-score')



function computerPlay() {
    const arrOfChoices = ['rock', 'paper', 'scissors']
    const randomNum = Math.floor(Math.random() * 3)
    const compChoice = arrOfChoices[randomNum]
    return compChoice
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection){
        const p = document.createElement('p');
        p.innerText = `You tied! You both picked ${playerSelection}`;
        outcomeDiv.appendChild(p);
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++
        const p = document.createElement('p');
        p.innerText = 'You won! you picked Scissors';
        outcomeDiv.appendChild(p);
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++
        const p = document.createElement('p');
        p.innerText = 'You lost! rock crushes scissors';
        outcomeDiv.appendChild(p);
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++
        const p = document.createElement('p');
        p.innerText = 'You won! paper wraps rocks';
        outcomeDiv.appendChild(p);
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++
        const p = document.createElement('p');
        p.innerText = 'You lost! scissors cut paper';
        outcomeDiv.appendChild(p);
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++
        const p = document.createElement('p');
        p.innerText = 'You won! rock crushes scissors';
        outcomeDiv.appendChild(p);
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++
        const p = document.createElement('p');
        p.innerText = 'You lost! paper wraps rock';
        outcomeDiv.appendChild(p);
    }
}

const checkForWinner = (playerScore, computerScore) => {
    if(playerScore === 5){
         const h2 = document.createElement('h2');
         h2.classList.add('player-won');
         h2.innerText = `You won ${playerScore} to ${computerScore} greate job beating the computer.`;
         outcomeDiv.append(h2);
    } else if (computerScore === 5){
         const h2 = document.createElement('h2')
         h2.classList.add('computer-won');
         h2.innerText = `You lost ${playerScore} to ${computerScore} greate job losing to the computer.`;
         outcomeDiv.append(h2);
    }
}

const updateScore = (playerScore, computerScore) => {
    playerScoreSpan.innerText = `Player score: ${playerScore}`;
    computerScoreSpan.innerText = `Computer score: ${computerScore}`;
}

rockButton.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'rock';
    playRound(playerSelection, computerSelection);
    updateScore(playerScore, computerScore);
    checkForWinner(playerScore, computerScore);
})

paperButton.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'paper';
    playRound(playerSelection, computerSelection);
    updateScore(playerScore, computerScore);
    checkForWinner(playerScore, computerScore);
})

scissorsButton.addEventListener('click', () => {
    const computerSelection = computerPlay();
    const playerSelection = 'scissors';
    playRound(playerSelection, computerSelection);
    updateScore(playerScore, computerScore);
    checkForWinner(playerScore, computerScore); 
})

/* function game() {
    for (let i = 0; i < 5; i++){
        const playerSelection = prompt('Choose what to throw ', 'Rock, Paper, Scissors').toLowerCase();
        const computerSelection = computerPlay();
    }
    if (playerScore > computerScore){
        return 'You beat the computer! You are a genius.'
    } else if ( playerScore < computerScore){
        return 'You got the best by the computer'
    } else {
        return 'You tied with the computer'
    }
}
 */

