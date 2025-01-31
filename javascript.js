const options = ["rock", "paper", "scissors"];

const playerOptions = document.querySelector("#playerOptions");
const resultDisplay = document.querySelector("#resultDisplay");
const scoresDisplay = document.querySelector("#scores");

let humanScore = 0;
let computerScore = 0;

const rockButton = document.createElement("button");
rockButton.textContent = "rock";
rockButton.addEventListener("click", () => playGame("rock"));
playerOptions.appendChild(rockButton);

const paperButton = document.createElement("button");
paperButton.textContent = "paper";
paperButton.addEventListener("click", () => playGame("paper"));
playerOptions.appendChild(paperButton);

const scissorsButton = document.createElement("button");
scissorsButton.textContent = "scissors";
scissorsButton.addEventListener("click", () => playGame("scissors"));
playerOptions.appendChild(scissorsButton);

function getComputerChoice() {
  return options[Math.floor(Math.random() * options.length)];
}

function playGame(humanChoice) {
  const computerChoice = getComputerChoice();
  const result = playRound(humanChoice, computerChoice);
  resultDisplay.textContent = result;
  updateScores();
  checkWinner();
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "It's a tie.";
  } else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "scissors" && computerChoice === "rock") ||
    (humanChoice === "paper" && computerChoice === "scissors")
  ) {
    computerScore += 1;
    return `You lose, ${computerChoice} beats ${humanChoice}.`;
  } else {
    humanScore += 1;
    return `You win, ${humanChoice} beats ${computerChoice}.`;
  }
}

function updateScores() {
  scoresDisplay.textContent = `Human: ${humanScore} - Computer: ${computerScore}`;
}

function checkWinner() {
  if (humanScore === 5) {
    resultDisplay.textContent = "Congratulations! You win the game!";
    resetGame();
  } else if (computerScore === 5) {
    resultDisplay.textContent = "Sorry, the computer wins the game.";
    resetGame();
  }
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  updateScores();
}

// Initialize the scores display
updateScores();
