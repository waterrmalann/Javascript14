const e_CALC1_InputX = document.getElementById('CALC1_InputX');
const e_CALC1_InputY = document.getElementById('CALC1_InputY');
const e_CALC1_Result = document.getElementById('CALC1_Result');

const e_CALC2_InputX = document.getElementById('CALC2_InputX');
const e_CALC2_InputY = document.getElementById('CALC2_InputY');
const e_CALC2_Result = document.getElementById('CALC2_Result');

const e_CALC3_InputX = document.getElementById('CALC3_InputX');
const e_CALC3_InputY = document.getElementById('CALC3_InputY');
const e_CALC3_Result = document.getElementById('CALC3_Result');

/* What percent of (wpo) X is Y
X is what percent of Y

What percent of 50 is 24 (48%)
24 is what percent of 50 (48%)

eg: 50 is what percent of 24 (48%)
eg: 110 is what percent of 165 (150%)
*/
function wpo(x, y) {
	return (x * 100) / y;
}

function CALC1() {
	let _x = parseFloat(e_CALC1_InputX.value);
	let _y = parseFloat(e_CALC1_InputY.value);
	
	if (!isNaN(_x) && !isNaN(_y)) {
		let _computed = wpo(_x, _y);
		_computed = +_computed.toFixed(2);
		e_CALC1_Result.innerText = _computed + '%';
	}
}

e_CALC1_InputY.addEventListener('input', CALC1);
e_CALC1_InputX.addEventListener('input', CALC1);

/* What is X% of Y

eg: What is 50% of 100? (50)
*/
function po(x, y) {
	return (x / 100) * y;
}

function CALC2() {
	let _x = parseFloat(e_CALC2_InputX.value);
	let _y = parseFloat(e_CALC2_InputY.value);
	
	if (!isNaN(_x) && !isNaN(_y)) {
		let _computed = po(_x, _y);
		_computed = +_computed.toFixed(2);
		e_CALC2_Result.innerText = _computed;
	}
}

e_CALC2_InputY.addEventListener('input', CALC2);
e_CALC2_InputX.addEventListener('input', CALC2);

/* Percentage increase/decrease From X to Y

eg: From 50 to 80. What percent increase?
*/
function percentIncrease(x, y) {
	return ((y - x) / x) * 100
}

function CALC3() {
	let _x = parseFloat(e_CALC3_InputX.value);
	let _y = parseFloat(e_CALC3_InputY.value);
	
	if (!isNaN(_x) && !isNaN(_y)) {
		let _computed = percentIncrease(_x, _y);
		_computed = _computed.toFixed(2);
		e_CALC3_Result.innerText = _computed + '%';
	}
}

e_CALC3_InputY.addEventListener('input', CALC3);
e_CALC3_InputX.addEventListener('input', CALC3);