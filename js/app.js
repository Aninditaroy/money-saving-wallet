document.getElementById('calculate-btn').addEventListener('click', function () {
    calculateExpenses();
});

function getInputValue(inputId) {
    const input = document.getElementById(inputId);
    const inputText = document.getElementById(inputId).value;
    const inputField = parseInt(inputText);
    const failMessage = document.getElementById('fail-text');
    if (inputField != 'string') {
        failMessage.style.display = 'block';
    }
    // clear input field
    input.value = '';
    return inputField;
}

function calculateExpenses() {
    const totalExpenses = document.getElementById('total-expenses');
    const food = getInputValue('food');
    const rent = getInputValue('rent');
    const cloths = getInputValue('cloths');
    const total = parseInt(food) + parseInt(rent) + parseInt(cloths);
    totalExpenses.innerText = total;
}