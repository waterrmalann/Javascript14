const e_time = document.getElementById('time');

function changeBackground() {
	let _currentDate = new Date();
	let _currentTime = _currentDate.toTimeString().split(' ')[0];
	let _hexCode = '#' + _currentTime.replaceAll(':', '');
	document.body.style.backgroundColor = _hexCode;
	e_time.innerText = _currentTime;

	setTimeout(changeBackground, 1000);
}

changeBackground();