var incomeBtn = document.getElementById("income");
var expenseBtn = document.getElementById("expense");
var transactions = [];
var currentBalance = 0;
incomeBtn.addEventListener("click", addIncome);
expenseBtn.addEventListener("click", addExpense);

function display(array) {
  var tbody = document.querySelector("tbody");
  tbody.textContent = "";
  for (var i = 0; i < array.length; i++) {
    var tr = document.createElement("tr");
    var item = document.createElement("td");
    var amount = document.createElement("td");
    var type = document.createElement("td");
    item.textContent = array[i].item;
    amount.textContent = array[i].amount;
    type.textContent = array[i].type;
    tr.append(item, amount, type);
    tbody.append(tr);
  }

  var income = transactions
    .filter(function (a) {
      return a.type == "Income";
    })
    .reduce(function (a, b) {
      return a + b.amount;
    }, 0);

  var displayIncome = document.getElementById("displayincome");
  displayIncome.textContent = income;

  var expense = transactions
    .filter(function (a) {
      return a.type == "Expense";
    })
    .reduce(function (a, b) {
      return a + b.amount;
    }, 0);
  var displayExpense = document.getElementById("diplayexpense");
  displayExpense.textContent = expense;

  var balance = document.getElementById("balance");
  balance.textContent = income - expense;
  currentBalance = income - expense;
}

function addIncome() {
  var item = document.getElementById("item").value;
  var amount = document.getElementById("amount").value;
  transactions.push({
    item: item,
    amount: Number(amount),
    type: "Income",
  });
  display(transactions);
}

function addExpense() {
  var item = document.getElementById("item").value;
  var amount = document.getElementById("amount").value;
  if (amount > currentBalance) {
    alert("You dont have enough money to spend");
  } else {
    transactions.push({
      item: item,
      amount: Number(amount),
      type: "Expense",
    });
  }

  display(transactions);
}

var acbtn = document.getElementById("AscendingOrder");
acbtn.addEventListener("click", Ascending);
function Ascending() {
  var newarry = transactions.sort(function (a, b) {
    return a.amount - b.amount;
  });
  display(newarry);
}

var dcbtn = document.getElementById("DescendingOrder");
dcbtn.addEventListener("click", Descnding);
function Descnding() {
  var newarry = transactions.sort(function (a, b) {
    return b.amount - a.amount;
  });
  display(newarry);
}
