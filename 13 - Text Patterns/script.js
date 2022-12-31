const e_inputText = document.getElementById("inputText");
const e_outputText = document.getElementById("outputText");

const e_checkboxReverseEnd = document.getElementById("checkboxReverseEnd");

const e_options = document.getElementById("options");

e_inputText.addEventListener("input", () => {
	if (e_inputText.value !== "") {
		syncGenerator();
	}
});

e_outputText.addEventListener("click", () => {
	navigator.clipboard
		.writeText(e_outputText.innerText)
		.then(() => {
			alert("Copied.");
		})
		.catch((error) => {
			alert(`Copy failed! ${error}`);
		});
});

e_checkboxReverseEnd.addEventListener("change", syncGenerator);

e_options.addEventListener("change", syncGenerator);

function syncGenerator() {
	if (e_options.value === "pyramid") {
		e_outputText.innerText = triangulate(e_inputText.value);
	} else if (e_options.value === "spaced") {
		e_outputText.innerText = spaced(e_inputText.value);
	}
}

function triangulate(text) {
	let _parts = [];
	let _constructed = "";
	for (const c of text) {
		_constructed += c;
		_parts.push(_constructed);
	}
	if (e_checkboxReverseEnd.checked) {
		let _reversed = _parts.slice().reverse();
		_parts.push(..._reversed);
	}
	return _parts.join("\n");
}

function spaced(text) {
	let _space = text.length;
	let _parts = [];
	let _constructed = text;
	for (let i = 0; i < _space; i++) {
		_constructed = " " + _constructed;
		_parts.push(_constructed);
	}
	if (e_checkboxReverseEnd.checked) {
		let _reversed = _parts.slice().reverse();
		_parts.push(..._reversed);
	}
	return _parts.join("\n");
}