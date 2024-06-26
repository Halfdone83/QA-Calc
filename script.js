let display = document.getElementById('display');
let currentOperation = '';
let firstOperand = '';
let secondOperand = '';
let shouldResetDisplay = false;

function appendNumber(number) {
    if (shouldResetDisplay) {
        display.value = '';
        shouldResetDisplay = false;
    }
    display.value += number;
}

function setOperation(operation) {
    if (currentOperation !== '') calculateResult();
    firstOperand = display.value;
    currentOperation = operation;
    shouldResetDisplay = true;
}

function calculateResult() {
    if (currentOperation === '') return;
    secondOperand = display.value;
    display.value = evaluate(firstOperand, secondOperand, currentOperation);
    currentOperation = '';
}

function evaluate(a, b, operation) {
    a = parseFloat(a);
    b = parseFloat(b);
    if (isNaN(a) || isNaN(b)) return '';
    switch (operation) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return b !== 0 ? a / b : 'Error';
        default:
            return '';
    }
}

function clearDisplay() {
    display.value = '';
    currentOperation = '';
    firstOperand = '';
    secondOperand = '';
    shouldResetDisplay = false;
}
