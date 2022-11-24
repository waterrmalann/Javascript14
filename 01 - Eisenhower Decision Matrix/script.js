const e_doInput = document.getElementById("doInput");
const e_doButton = document.getElementById("doButton");
const e_doList = document.getElementById("doList");

const e_scheduleInput = document.getElementById("scheduleInput");
const e_scheduleButton = document.getElementById("scheduleButton");
const e_scheduleList = document.getElementById("scheduleList");

const e_delegateInput = document.getElementById("delegateInput");
const e_delgateButton = document.getElementById("delegateButton");
const e_delegateList = document.getElementById("delegateList");

const e_deleteInput = document.getElementById("deleteInput");
const e_deleteButton = document.getElementById("deleteButton");
const e_deleteList = document.getElementById("deleteList");

e_doButton.addEventListener("click", () => {
	let _content = e_doInput.value.trim();
	e_doInput.value = "";
	if (_content != "") {
		let _liElement = document.createElement("li");
		_liElement.textContent = _content;
		_liElement.addEventListener("dblclick", () => {
			// Double click removes the list item.
			_liElement.parentNode.removeChild(_liElement);
		});
		e_doList.appendChild(_liElement);
	}
});

e_scheduleButton.addEventListener("click", () => {
	let _content = e_scheduleInput.value.trim();
	e_scheduleInput.value = "";
	if (_content != "") {
		let _liElement = document.createElement("li");
		_liElement.textContent = _content;
		_liElement.addEventListener("dblclick", () => {
			// Double click removes the list item.
			_liElement.parentNode.removeChild(_liElement);
		});
		e_scheduleList.appendChild(_liElement);
	}
});

e_delgateButton.addEventListener("click", () => {
	let _content = e_delegateInput.value.trim();
	e_delegateInput.value = "";
	if (_content != "") {
		let _liElement = document.createElement("li");
		_liElement.textContent = _content;
		_liElement.addEventListener("dblclick", () => {
			// Double click removes the list item.
			_liElement.parentNode.removeChild(_liElement);
		});
		e_delegateList.appendChild(_liElement);
	}
});

e_deleteButton.addEventListener("click", () => {
	let _content = e_deleteInput.value.trim();
	e_deleteInput.value = "";
	if (_content != "") {
		let _liElement = document.createElement("li");
		_liElement.textContent = _content;
		_liElement.addEventListener("dblclick", () => {
			// Double click removes the list item.
			_liElement.parentNode.removeChild(_liElement);
		});
		e_deleteList.appendChild(_liElement);
	}
});