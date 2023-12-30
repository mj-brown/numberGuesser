let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// Create a function that returns a random integer between 0 and 9.
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
};

// Create a function that takes 3 parameters to determine which guess is closest to the target number.
const compareGuesses = (currentHumanGuess, computerGuess, target) => {
    let newHumanGuess = Math.abs(target - currentHumanGuess);
    let newComputerGuess = Math.abs(target - computerGuess);
    if (newHumanGuess <= newComputerGuess) {
        return true;
    } else {
        return false;
    }
};

// Create a function that is to be used to correctly increase the winner's score after each round.
const updateScore = (winner) => {
    if (winner === 'human') {
        humanScore ++;
    } else {
        computerScore ++;
    }
};

// Create a function to update the round number after each round.
const advanceRound = () => {
    currentRoundNumber ++;
};
