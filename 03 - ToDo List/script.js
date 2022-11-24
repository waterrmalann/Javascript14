const e_taskInput = document.getElementById("taskInput");
const e_taskList = document.getElementById("taskList");

function constructTaskElement(content) {
	let _li = document.createElement("li");
	_li.classList.add('todo-item');
	let _contentSpan = document.createElement("span");
	_contentSpan.innerText = content;
	let _deleteSpan = document.createElement("span");
	_deleteSpan.classList.add('todo-delete');
	_deleteSpan.innerText = "❌";
	_deleteSpan.onclick = () => {
		_li.parentElement.removeChild(_li);
	}
	_li.appendChild(_contentSpan);
	_li.appendChild(_deleteSpan);
	return _li;
}

e_taskInput.addEventListener("keyup", ({ key }) => {
	if (key === "Enter") {
		let _value = e_taskInput.value.trim();
		if (_value != "") {
			addTask(e_taskInput.value);
			e_taskInput.value = '';
		}
	}
});

function addTask(content) {
	let _element = constructTaskElement(content);
	e_taskList.appendChild(_element);
}