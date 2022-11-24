const e_startDate = document.getElementById("startDate");
const e_endDate = document.getElementById("endDate");

const e_resultDays = document.getElementById("resultDays");
const e_resultDaysIndividual = document.getElementById("resultDaysIndividual");

var startDate = false;
var endDate = false;

e_startDate.addEventListener("input", () => {
	let _d = e_startDate.value;
	if (_d != "") {
		attemptConversion();
	}
});

e_endDate.addEventListener("input", () => {
	let _d = e_endDate.value;
	if (_d != "") {
		attemptConversion();
	}
});

function generateListElement(content) {
	let _el = document.createElement('li');
	_el.innerText = content;
	return _el;
}

function distanceBetweenDates(startDate, endDate) {
	const _dayMilliseconds = 1000 * 60 * 60 * 24;
	let _distanceCounter = {
		'sunday': 0,
		'monday': 0,
		'tuesday': 0,
		'wednesday': 0,
		'thursday': 0,
		'friday': 0,
		'saturday': 0,
		'totalDays': 0,
		'hours': 0
	};
	let _workingDate = startDate;
	while (_workingDate <= endDate) {
		let _day = _workingDate.toLocaleString('en-us', {weekday:'long'}).toLowerCase();
		
		_distanceCounter['totalDays']++;
		_distanceCounter[_day]++;
		_workingDate = new Date(+_workingDate + _dayMilliseconds);
	}
	_distanceCounter['hours'] = Math.abs(startDate - endDate) / 36e5;
	return _distanceCounter;
}

function attemptConversion() {
	if (e_startDate.value != "" && e_endDate.value != "") {
		convertDates();
	}
}

function convertDates() {
	let _startDate = new Date(e_startDate.value);
	let _endDate = new Date(e_endDate.value);
	
	let _days = distanceBetweenDates(_startDate, _endDate);
	e_resultDaysIndividual.innerHTML = '';
	e_resultDaysIndividual.appendChild(generateListElement(_days['sunday'] + " Sundays"));
	e_resultDaysIndividual.appendChild(generateListElement(_days['monday'] + " Mondays"));
	e_resultDaysIndividual.appendChild(generateListElement(_days['tuesday'] + " Tuesdays"));
	e_resultDaysIndividual.appendChild(generateListElement(_days['wednesday'] + " Wednesdays"));
	e_resultDaysIndividual.appendChild(generateListElement(_days['thursday'] + " Thursdays"));
	e_resultDaysIndividual.appendChild(generateListElement(_days['friday'] + " Fridays"));
	e_resultDaysIndividual.appendChild(generateListElement(_days['saturday'] + " Saturdays"));
	
	e_resultDays.innerText = _days['totalDays'] + " days";
}