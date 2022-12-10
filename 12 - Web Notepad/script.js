const e_notesContainer = document.getElementById("notesContainer");

const e_noteModal = document.getElementById("noteModal");
const e_noteModalClose = document.getElementById("noteModalClose");
const e_noteModalDelete = document.getElementById("noteModalDelete");
const e_noteModalTitle = document.getElementById("noteModalTitle");
const e_noteModalText = document.getElementById("noteModalText");
const e_noteModalFooter = document.getElementById("noteModalFooter");

const e_addNote = document.getElementById("addNote");

var appData = {
	notes: [],
	uniqueID: 0
};

function generateNoteElement(note) {
	const _h1 = document.createElement("h1");
	_h1.textContent = note.title;
	const _p = document.createElement("p");
	_p.textContent = note.content.substring(0, 16) + "...";
	const _div = document.createElement("div");
	_div.classList.add("note");
	_div.id = "n" + note.id;
	_div.appendChild(_h1);
	_div.appendChild(_p);
	_div.addEventListener("click", () => {
		showNote(note);
	});
	e_notesContainer.appendChild(_div);
}

function updateNoteElement(id) {
	let _note = appData.notes[appData.notes.findIndex((e) => e.id === id)];
	if (id) {
	const _div = document.getElementById('n' + id);
	_div.firstChild.innerText = _note.title;
	_div.lastChild.innerText = _note.content.substring(0, 16) + "...";
	}
}

function createNote(title, content) {
	appData.uniqueID++;
	let _note = { id: appData.uniqueID, title: title, content: content };
	appData.notes.push(_note);
	generateNoteElement(_note);
	return _note;
}

function deleteNote(id) {
	appData.notes = appData.notes.filter((e) => e.id === id);
	document.getElementById("n" + id).remove();
}

function showNote(note) {
	e_noteModal.dataset.activeNote = note.id;
	e_noteModalTitle.value = note.title;
	e_noteModalText.value = note.content;
	e_noteModal.style.display = "block";

	let _noteIndex = appData.notes.findIndex((e) => e.id === note.id);

	e_noteModalText.oninput = function () {
		appData.notes[_noteIndex].content = e_noteModalText.value;
	};
	e_noteModalTitle.oninput = function () {
		appData.notes[_noteIndex].title = e_noteModalTitle.value;
	};
}

function hideNote() {
	e_noteModal.style.display = "none";
	updateNoteElement(parseInt(e_noteModal.dataset.activeNote));
}

function addNote() {
	let _note = createNote("untitled note", "");
	showNote(_note);
}

e_noteModalClose.addEventListener("click", hideNote);

e_noteModalDelete.addEventListener("click", () => {
	hideNote();
	deleteNote(e_noteModal.dataset.activeNote);
	e_noteModal.dataset.activeNote = '';
});

e_addNote.addEventListener("click", addNote);