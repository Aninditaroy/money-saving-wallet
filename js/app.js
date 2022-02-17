// get input value
function getInputValue(inputId) {
    const input = document.getElementById(inputId);
    const inputText = document.getElementById(inputId).value;
    const inputField = parseInt(inputText);
    // clear input field
    input.value = '';
    return inputField;
}
// calculate sum of expenses
function calculateExpenses(newInputFood, newInputRent, newInputCloths) {
    const sumExpenses = newInputFood + newInputRent + newInputCloths;
    return sumExpenses;
}
// calculate total expenses and balance
document.getElementById('calculate-btn').addEventListener('click', function () {
    const totalExpenses = document.getElementById('total-expenses');
    const income = getInputValue('income');
    const food = getInputValue('food');
    const rent = getInputValue('rent')
    const cloths = getInputValue('cloths');
    const sumOfExpenses = calculateExpenses(food, rent, cloths);
    totalExpenses.innerText = sumOfExpenses;
    balance.innerText = income - totalExpenses.innerText;
});

