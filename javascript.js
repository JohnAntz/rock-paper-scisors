const options = ["rock", "paper", "scissors"];

let humanScore = 0;
let computerScore = 0;
function getComputerChoice() {
  const computerChoice = options[Math.floor(Math.random() * options.length)];
  return computerChoice;
}
function getHumanChoice() {
  const humanChoice = prompt(
    "Choose between rock, paper or scissors. Type it in lowercase."
  ).toLowerCase();
  return humanChoice;
}
function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    return "It's a tie.";
  } else if (
    (humanChoice == "rock" && computerChoice == "paper") ||
    (humanChoice == "scissors" && computerChoice == "rock") ||
    (humanChoice == "paper" && computerChoice == "scissors")
  ) {
    computerScore += 1;
    return `You lose, ${computerChoice} beats ${humanChoice}`;
  } else if (
    (humanChoice == "rock" && computerChoice == "scissors") ||
    (humanChoice == "scissors" && computerChoice == "paper") ||
    (humanChoice == "paper" && computerChoice == "rock")
  ) {
    humanScore += 1;
    return `You win, ${humanChoice} beats ${computerChoice}`;
  } else return "Invalid choice, choose a valid option.";
}

function playGame() {
  for (let i = 0; i <= 4; i++) {
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();
    console.log(`Round ${i + 1}:`);
    console.log(playRound(humanChoice, computerChoice));
    console.log(
      "Current Scores - Human: " + humanScore + ", Computer: " + computerScore
    );
    console.log("------------------------------");
  }
}

playGame();
