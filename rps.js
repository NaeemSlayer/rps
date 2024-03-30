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
        return 'You win! ${playerSelection} beats ${computerSelection}.'; 
    } else {
        return 'You lose! ${computerSelection} beats ${playerSelection}.'; 
    }
  }
  

  