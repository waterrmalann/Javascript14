const e_rock = document.getElementById("rock");
const e_paper = document.getElementById("paper");
const e_scissors = document.getElementById("scissors");

const e_outcome = document.getElementById("outcome");
const e_opponentChoice = document.getElementById("opponentChoice");
const e_opponentChoiceOutcome = document.getElementById("opponentChoiceOutcome");

e_rock.addEventListener("click", () => {
	playGame("rock");
});
e_paper.addEventListener("click", () => {
	playGame("paper");
});
e_scissors.addEventListener("click", () => {
	playGame("scissors");
});

function playGame(choice) {
	let _choices = ["rock", "paper", "scissors"];
	let _opponent = _choices[Math.floor(Math.random() * _choices.length)];
	if (_opponent == "rock") {
		e_opponentChoice.className = "fa-solid fa-hand-back-fist";
	} else if (_opponent == "paper") {
		e_opponentChoice.className = "fa-solid fa-hand";
	} else {
		e_opponentChoice.className = "fa-solid fa-hand-scissors";
	}
	e_opponentChoice.setAttribute("title", _opponent);

	if (choice == _opponent) {
		e_outcome.innerText = "It's a draw.";
		e_opponentChoiceOutcome.innerText = `${choice} and ${choice}`;
	} else if (choice == "rock" && _opponent == "paper") {
		e_outcome.innerText = "You lose.";
		e_opponentChoiceOutcome.innerText = "paper covers rock";
	} else if (choice == "rock" && _opponent == "scissors") {
		e_outcome.innerText = "You win!";
		e_opponentChoiceOutcome.innerText = "rock blunts scissors";
	} else if (choice == "paper" && _opponent == "rock") {
		e_outcome.innerText = "You win!";
		e_opponentChoiceOutcome.innerText = "paper covers rock";
	}

	if (choice == _opponent) {
		e_outcome.innerText = "Draw.";
		e_opponentChoiceOutcome.innerText = `${choice} and ${_opponent}`;
	} else if (
		(choice == "rock" && _opponent == "paper") ||
		(choice == "paper" && _opponent == "rock")
	) {
		// Rock vs Paper (Paper wins)
		e_outcome.innerText = choice == "paper" ? "You win!" : "You lose.";
		e_opponentChoiceOutcome.innerText = "paper covers rock";
	} else if (
		(choice == "rock" && _opponent == "scissors") ||
		(choice == "scissors" && _opponent == "rock")
	) {
		// Rock vs Scissors (Rock wins)
		e_outcome.innerText = choice == "rock" ? "You win!" : "You lose.";
		e_opponentChoiceOutcome.innerText = "rock blunts scissors";
	} else if (
		(choice == "paper" && _opponent == "scissors") ||
		(choice == "scissors" && _opponent == "paper")
	) {
		// Paper vs Scissors (Scissors wins)
		e_outcome.innerText = choice == "scissors" ? "You win!" : "You lose.";
		e_opponentChoiceOutcome.innerText = "scissors cuts paper";
	}
}