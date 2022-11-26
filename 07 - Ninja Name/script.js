const e_name = document.getElementById("name");
const e_result = document.getElementById("result");

const e_changeGenerator = document.getElementById("changeGenerator");
const e_sourceLink = document.getElementById("sourceLink");

var isAlternativeGenerator = false;

// Mappings for Generator #1
const mappings1 = {
	a: "Shi",
	b: "Ari",
	c: "Chi",
	d: "Do",
	e: "Ru",
	f: "Mei",
	g: "Ma",
	h: "Fu",
	i: "Zi",
	j: "Ka",
	k: "Zu",
	l: "Mi",
	m: "Te",
	n: "Ku",
	o: "Li",
	p: "Ji",
	q: "Ri",
	r: "Ki",
	s: "Ze",
	t: "Me",
	u: "Ta",
	v: "Rin",
	w: "To",
	x: "Ke",
	y: "No",
	z: "Mo"
};

// Mappings for Generator #2
const mappings2 = {
	a: "Ka",
	b: "Zu",
	c: "Mi",
	d: "Te",
	e: "Ku",
	f: "Lu",
	g: "Ji",
	h: "Ri",
	i: "Ki",
	j: "Zu",
	k: "Me",
	l: "Ta",
	m: "Rin",
	n: "To",
	o: "Mo",
	p: "No",
	q: "Ke",
	r: "Shi",
	s: "Ari",
	t: "Chi",
	u: "Do",
	v: "Ru",
	w: "Mei",
	x: "Na",
	y: "Fu",
	z: "Zi"
};

function getNinjaName(realName) {
	let _ninjaNameConstructor = [];
	for (const _char of realName) {
		let _c = _char.toLowerCase();
		if (isAlternativeGenerator) {
			if (_c in mappings2) {
				_ninjaNameConstructor.push(mappings2[_c]);
			}
		} else {
			if (_c in mappings1) {
				_ninjaNameConstructor.push(mappings1[_c]);
			}
		}
	}
	return _ninjaNameConstructor.join("-");
}

function convertName() {
	e_result.innerText = getNinjaName(e_name.value);
}

e_name.addEventListener("input", () => {
	convertName();
});

e_result.addEventListener("click", () => {
	this.focus();
	navigator.clipboard
		.writeText(e_result.innerText)
		.then(() => {
			alert("Copied");
		})
		.catch((error) => {
			alert(`Failure: ${error}`);
		});
});

e_changeGenerator.addEventListener("click", () => {
	if (isAlternativeGenerator) {
		isAlternativeGenerator = false;
		e_changeGenerator.textContent = "Use Alternative Generator";
		e_sourceLink.setAttribute("href", "https://pinterest.com/pin/860820916258452299/");
	} else {
		isAlternativeGenerator = true;
		e_changeGenerator.textContent = "Use Original Generator";
		e_sourceLink.setAttribute("href", "https://pinterest.com/pin/792915078123848171/");
	}
	convertName();
});