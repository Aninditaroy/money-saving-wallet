// get input value
function getInputValue(inputId) {
    const input = document.getElementById(inputId);
    const inputText = document.getElementById(inputId).value;
    const inputField = parseFloat(inputText);
    return inputField;
}
// get element by id
function getElement(param) {
    return document.getElementById(param);
}
// calculate sum of expenses
function calculateExpenses(newInputFood, newInputRent, newInputCloths) {
    const sumExpenses = newInputFood + newInputRent + newInputCloths;
    return sumExpenses;
}

// calculate total expenses and balance
document.getElementById('calculate-btn').addEventListener('click', function () {
    const totalExpenses = getElement('total-expenses');
    const income = getInputValue('income');
    const food = getInputValue('food');
    const rent = getInputValue('rent');
    const cloths = getInputValue('cloths');
    const failMessage = getElement('fail-text');
    const failMessageTwo = getElement('fail-text-2');
    const failMessageThree = getElement('fail-text-3');
    const balance = getElement('balance');
    const sumOfExpenses = calculateExpenses(food, rent, cloths);
    const expenseText = parseFloat(totalExpenses.innerText);
    const balanceText = parseFloat(balance.innerText);
    if (isNaN(income) || isNaN(food) || isNaN(rent) || isNaN(cloths)) {
        failMessageTwo.style.display = 'none';
        failMessage.style.display = 'block';
        expenseText = 0;
        balanceText = 0;
    }
    if (income < 0 || food < 0 || rent < 0 || cloths < 0) {
        failMessage.style.display = 'none';
        failMessageTwo.style.display = 'block';
        expenseText = 0;
        balanceText = 0;
    }
    if (sumOfExpenses > income) {
        failMessageThree.style.display = 'block';
        expenseText = 0;
        balanceText = 0;
    }
    else {
        totalExpenses.innerText = sumOfExpenses;
        balance.innerText = income - totalExpenses.innerText;
    }
});
// save calculation
document.getElementById('save-btn').addEventListener('click', function () {
    const saveInput = getInputValue('save');
    const balanceTextValue = getElement('balance').innerText;
    const currentBalance = parseFloat(balanceTextValue);
    const newSavingAmount = getElement('saving-amount');
    const newRemainingBalance = getElement('remaining-balance');
    const failMessageFour = getElement('fail-text-4');
    let discount = (saveInput / 100) * 100;
    const savingAmount = (discount * 100);
    const remainingBalance = currentBalance - savingAmount;
    if ((savingAmount > currentBalance) || (currentBalance < saveInput)) {
        failMessageFour.style.display = 'block';
    }
    else {
        newSavingAmount.innerText = savingAmount;
        newRemainingBalance.innerText = remainingBalance;
    }

})
// reset button
document.getElementById('reset-btn').addEventListener('click', function () {
    const income = getElement('income');
    const food = getElement('food');
    const rent = getElement('rent');
    const cloths = getElement('cloths');
    const save = getElement('save');
    const failMessage = getElement('fail-text');
    const failMessageTwo = getElement('fail-text-2');
    const failMessageThree = getElement('fail-text-3');
    const failMessageFour = getElement('fail-text-4');
    // clear input field
    income.value = '';
    food.value = '';
    rent.value = '';
    cloths.value = '';
    save.value = '';
    const totalExpenses = getElement('total-expenses');
    const balance = getElement('balance');
    const savingAmount = getElement('saving-amount');
    const remainingBalance = getElement('remaining-balance');
    // reset the 
    totalExpenses.innerText = 0;
    balance.innerText = 0;
    savingAmount.innerText = 0;
    remainingBalance.innerText = 0;
    failMessage.style.display = 'none';
    failMessageTwo.style.display = 'none';
    failMessageThree.style.display = 'none';
    failMessageFour.style.display = 'none';
})
