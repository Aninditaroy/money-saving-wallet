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
    const balance = getElement('balance');
    if (isNaN(income) || isNaN(food) || isNaN(rent) || isNaN(cloths)) {
        failMessageTwo.style.display = 'none';
        failMessage.style.display = 'block';
    }
    else if (income < 0 || food < 0 || rent < 0 || cloths < 0) {
        failMessage.style.display = 'none';
        failMessageTwo.style.display = 'block';
    }
    else {
        const sumOfExpenses = calculateExpenses(food, rent, cloths);
        totalExpenses.innerText = sumOfExpenses;
        balance.innerText = income - totalExpenses.innerText;
    }
});
// save calculation
document.getElementById('save-btn').addEventListener('click', function () {
    const saveInput = getInputValue('save');
    const balanceTextValue = getElement('balance').innerText;
    const balance = parseFloat(balanceTextValue);
    const newSavingAmount = getElement('saving-amount');
    const newRemainingBalance = getElement('remaining-balance');
    let discount = (saveInput / 100) * 100;
    const savingAmount = (discount * 100);
    newSavingAmount.innerText = savingAmount;
    const remainingBalance = balance - savingAmount;
    newRemainingBalance.innerText = remainingBalance;
})
// reset button
document.getElementById('reset-btn').addEventListener('click', function () {
    const income = getElement('income');
    const food = getElement('food');
    const rent = getElement('rent');
    const cloths = getElement('cloths');
    const save = getElement('save');
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
    totalExpenses.innerText = 0;
    balance.innerText = 0;
    savingAmount.innerText = 0;
    remainingBalance.innerText = 0;
})
