
let playerScore = 0
let computerScore = 0


function computerPlay() {
    const arrOfChoices = ['rock', 'paper', 'scissors']
    const randomNum = Math.floor(Math.random() * 3)
    const compChoice = arrOfChoices[randomNum]
    return compChoice
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'rock'){
        return 'You tied! you both picked rock'
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'You tied! you both picked paper'
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return 'You tied! you both picked Scissors'
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++
        return 'You won! you picked Scissors'
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
         computerScore++
        return 'You lost! rock crushes scissors'
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++
        return 'You won! paper wraps rocks'
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++
        return 'You lost! scissors cut paper'
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++
        return 'You won! rock crushes scissors'
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++
        return 'You lost! paper wraps rock'
    }
}

function game() {
    for (let i = 0; i < 5; i++){
        const playerSelection = prompt('Choose your throw').toLowerCase()
        const computerSelection = computerPlay()
        playRound(playerSelection, computerSelection)
    }
    if (playerScore > computerScore){
        return 'You beat the computer! You are a genius.'
    } else if ( playerScore < computerScore){
        return 'You got the best by the computer'
    } else {
        return 'You tied with the computer'
    }
}

console.log(game())
