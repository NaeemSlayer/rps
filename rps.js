// function returns a random element from array
function getComputerChoice() {
    const choices = ['0', '1', '2'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

