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
  
function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter your choice (Rock, Paper, Scissors): ");
        const computerSelection = getComputerChoice();

        console.log(`Round ${i + 1  }: `);
        console.log(`Player's choice: ${playerSelection}`);
        console.log(`Computer's choice: ${computerSelection}`);

        const result = playRound(playerSelection, computerSelection);
        console.log(result);

        // update the scores
        if (result.includes('Win')) {
            playerScore++;
        } else if (result.includes('Lose')) {
            computerScore++;
        }
    }

    // finding the winner
    if (playerScore > computerScore) {
        console.log("Congrats, You Won!!!");
    } else if (playerScore < computerScore) {
        console.log("You lose :( Try again...");
    } else {
        console.log("It's a tie!!!`")
    }
}
  
// runs the game
playGame();