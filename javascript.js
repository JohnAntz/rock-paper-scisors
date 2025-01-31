const options = ["rock", "paper", "scissors"];

const playerOptions = document.querySelector("#playerOptions");
const resultDisplay = document.querySelector("#resultDisplay");

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

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  return options[Math.floor(Math.random() * options.length)];
}

function playGame(humanChoice) {
  const computerChoice = getComputerChoice();
  const result = playRound(humanChoice, computerChoice);
  resultDisplay.textContent = result;
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
