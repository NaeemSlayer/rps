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
        return { result: "It's a tie!", winner: 'tie' };
    }

    // check for player win conditions
    if (
        (playerSelection === 'rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'paper' && computerSelection === 'Rock') ||
        (playerSelection === 'scissors' && computerSelection === 'Paper')
    ) {
        return { result: `You win! ${playerSelection} beats ${computerSelection}.`, winner: 'player' };
    } else {
        return { result: `You lose! ${computerSelection} beats ${playerSelection}.`, winner: 'computer' };
    }
}

// Update display with the result
function displayResult(result) {
    const resultDisplay = document.getElementById('results');
    resultDisplay.textContent = result;
}

// Update display with the scores
function displayScore(playerScore, computerScore) {
    const scoreDisplay = document.getElementById('score');
    scoreDisplay.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
}

// Main function to play the game
function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    // Add event listeners to buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const playerSelection = this.id;
            const computerSelection = getComputerChoice();
            const result = playRound(playerSelection, computerSelection);

            displayResult(result.result);

            // Update the scores
            if (result.winner === 'player') {
                playerScore++;
            } else if (result.winner === 'computer') {
                computerScore++;
            }

            displayScore(playerScore, computerScore);

            // Check for winner
            if (playerScore === 5) {
                alert("Congrats, You Won!!!");
                resetGame();
            } else if (computerScore === 5) {
                alert("You lose :( Try again...");
                resetGame();
            }
        });
    });
}

// Function to reset the game
function resetGame() {
    const scoreDisplay = document.getElementById('score');
    const resultDisplay = document.getElementById('results');
    scoreDisplay.textContent = '';
    resultDisplay.textContent = '';
}

// Run the game
playGame();
