// function returns a random element from array
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

// function to play a single round
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    // check for tie
    if (playerSelection === computerSelection.toLowerCase()) {
        return "It's a tie!";
    }
    // check for player win conditions
    if (
        (playerSelection === 'rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'paper' && computerSelection === 'Rock') ||
        (playerSelection === 'scissors' && computerSelection === 'Paper')
    ) {
        return `You win! ${playerSelection} beats ${computerSelection}.`; 
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}.`; 
    }
  }
  
// function to handle button clicks
function handleClick(event) {
    const playerSelection = event.target.id.toLowerCase();
    const computerSelection = getComputerChoice();

    console.log(`Player's choice: ${playerSelection}`);
    console.log(`Computer's choice: ${computerSelection}`);

    const result = playRound(playerSelection, computerSelection);
    console.log(result);
}

// add event listeners to buttons
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

rockButton.addEventListener('click', handleClick);
paperButton.addEventListener('click', handleClick);
scissorsButton.addEventListener('click', handleClick);