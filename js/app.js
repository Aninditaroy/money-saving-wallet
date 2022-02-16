document.getElementById('calculate-btn').addEventListener('click', function () {
    calculateExpenses();
});

function getInputValue(inputId) {
    const input = document.getElementById(inputId);
    const inputText = document.getElementById(inputId).value;
    const inputField = parseInt(inputText);
    const failMessage = document.getElementById('fail-text');
    const failMessageTwo = document.getElementById('fail-text-2');
    if (inputField != 'number') {
        failMessage.style.display = 'block';
        failMessageTwo.style.display = 'none';
    }
    if(inputField <0){
        failMessageTwo.style.display = 'block';
        failMessage.style.display = 'none';
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