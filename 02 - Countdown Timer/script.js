const e_countdownHours = document.getElementById("countdownHours");
const e_countdownMinutes = document.getElementById("countdownMinutes");
const e_countdownSeconds = document.getElementById("countdownSeconds");

const e_countdownButton = document.getElementById("countdownButton");
const e_countdownOutput = document.getElementById("countdownOutput");

var timerRunning = false;
var timerRemaining = 0;

function startTimer() {
	let _hrs = parseInt(e_countdownHours.value) || 0;
	let _mins = parseInt(e_countdownMinutes.value) || 0;
	let _secs = parseInt(e_countdownSeconds.value) || 0;
	
	e_countdownHours.value = null;
	e_countdownMinutes.value = null;
	e_countdownSeconds.value = null;

	let _totalSeconds = (_hrs * 3600) + (_mins * 60) + _secs;
	timerRunning = true;
	timerRemaining = _totalSeconds;

	var countdown = setInterval(function () {
		let _secs = Math.floor(timerRemaining % 60);
		let _mins = Math.floor((timerRemaining / 60) % 60);
		let _hrs = Math.floor(timerRemaining / (60 * 60));

		e_countdownOutput.textContent = `${_hrs}h ${_mins}m ${_secs}s`;

		timerRemaining--;

		if (timerRemaining < 0) {
			clearInterval(countdown);
			timerRunning = false;
			timerRemaining = 0;
			e_countdownOutput.textContent = 'DONE!';
		}
	}, 1000);
}

// do time validation
e_countdownButton.addEventListener('click', () => {
	if (timerRunning) {
		e_countdownButton.textContent = 'START';
		timerRunning = false;
		timerRemaining = -1;
	} else {
		e_countdownButton.textContent = 'STOP';
		startTimer();
	}
});