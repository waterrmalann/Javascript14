const e_balanceAmount = document.getElementById("balanceAmount");
const e_incomeAmount = document.getElementById("incomeAmount");
const e_expenseAmount = document.getElementById("expenseAmount");

const e_transactionList = document.getElementById("transactionList");

const e_inputTitle = document.getElementById("inputTitle");
const e_inputAmount = document.getElementById("inputAmount");
const e_inputButton = document.getElementById("inputButton");

var income = 0;
var expense = 0;
var balance = 0;

function createTransactionElement(title, amount, isIncome) {
	let _li = document.createElement("li");
	let _div = document.createElement("div");
	_div.dataset.type = isIncome ? "income" : "expense";
	_div.classList.add("transaction");
	let _h4 = document.createElement("h4");
	_h4.classList.add("transaction__title");
	_h4.innerText = title;
	let _p = document.createElement("p");
	_p.classList.add("transaction__amount");
	_p.innerText = "$" + amount;
	_div.append(_h4, _p);
	_li.appendChild(_div);
	return _li;
}

e_inputButton.addEventListener("click", () => {
	let _title = e_inputTitle.value;
	let _amount = parseFloat(e_inputAmount.value);
	if (!_amount) return;
	if (_title.trim() === "") _title = "Transaction";

	let _isIncome = _amount < 0 ? false : true;
	registerTransaction(_title, Math.abs(_amount), _isIncome);

	// clear input fields
	e_inputTitle.value = "";
	e_inputAmount.value = "";
});

e_inputAmount.addEventListener("keyup", ({ key }) => {
	if (key === "Enter") {
		e_inputButton.click();
	}
});

function registerTransaction(title, amount, isIncome) {
	if (isIncome) {
		income += amount;
	} else {
		expense += amount;
	}
	balance = income - expense;

	e_balanceAmount.innerText = (balance < 0 ? "-$" : "$") + Math.abs(balance);
	e_incomeAmount.innerText = "$" + income;
	e_expenseAmount.innerText = "$" + expense;
	e_transactionList.appendChild(
		createTransactionElement(title, amount, isIncome)
	);
}