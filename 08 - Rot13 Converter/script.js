const e_textField = document.getElementById("textField");
const e_encodedField = document.getElementById("encodedField");

const asciiLowercase = "abcdefghijklmnopqrstuvwxyz";
const asciiUppercase = "ABCDEFGHIJKLMNOQPRSTUVWXYZ";

function rotate(string, by) {
	let _result = [];
	for (const _c of string) {
		if (asciiUppercase.includes(_c)) {
			_result.push(asciiUppercase[(asciiUppercase.indexOf(_c) + by) % 26]);
		} else if (asciiLowercase.includes(_c)) {
			_result.push(asciiLowercase[(asciiLowercase.indexOf(_c) + by) % 26]);
		} else {
			_result.push(_c);
		}
	}
	return _result.join("");
}

e_textField.addEventListener("input", () => {
	let _content = e_textField.value;
	if (_content != "") {
		e_encodedField.value = rotate(_content, 13);
	}
});

e_encodedField.addEventListener("input", () => {
	let _content = e_encodedField.value;
	if (_content != "") {
		e_textField.value = rotate(_content, 13);
	}
});