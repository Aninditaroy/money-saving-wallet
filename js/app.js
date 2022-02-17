// get input value
function getInputValue(inputId) {
    const input = document.getElementById(inputId);
    const inputText = document.getElementById(inputId).value;
    const inputField = parseInt(inputText);
    // clear input field
    input.value = '';
    return inputField;
}
// get element by id
function getElement(param){
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
    const rent = getInputValue('rent')
    const cloths = getInputValue('cloths')
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
// reset button
document.getElementById('reset-btn').addEventListener('click',function(){
    const totalExpenses = getElement('total-expenses');
    const balance = getElement('balance');
    totalExpenses.innerText = 0;
    balance.innerText = 0;
})
