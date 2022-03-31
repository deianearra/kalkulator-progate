const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
    calculatorScreen.value = number;
}

const numbers = document.querySelectorAll(".number");

numbers.forEach((number) => {
    number.addEventListener("click", () => {
        updateScreen(event.target.value);
    })
    
});

let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

const inputNumber = (number) => {
    if (currentNumber === '0'){
        currentNumber = number;
    } else {
        currentNumber += number;
    }
}

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    })
});

const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        console.log(event.target.value);
        inputOperator(event.target.value);
    })
});

const inputOperator = (operator) => {
    if (calculationOperator === ''){
        prevNumber = currentNumber;
    }
    
    calculationOperator = operator;
    currentNumber = '';
};

const equalSign = document.querySelector('.equal-sign');

equalSign.addEventListener('click', () => {
    console.log('Equal Button Clicked');
    calculate();
    updateScreen(currentNumber);
});

const calculate = () => {
    let result = '';
    switch (calculationOperator) {
        case "+":
            result = parseFloat(prevNumber + currentNumber);
            break;
        case "-":
            result = parseFloat(prevNumber - currentNumber);
            break;
        case "*":
            result = parseFloat(prevNumber * currentNumber);
            break;
        case "/":
            result = parseFloat(prevNumber / currentNumber);
            break
        default:
            break;
    }
    currentNumber = result;
    calculationOperator = '';
};

const clearBtn = document.querySelector('.all-clear');

clearBtn.addEventListener('click', () => {
    console.log('AC Button Clicked');
    clearAll();
    updateScreen(currentNumber);
});

clearAll = () => {
    prevNumber = '';
    calculationOperator = '';
    currentNumber = '0';
}

const decimal = document.querySelector('.decimal');

decimal.addEventListener('click', (event) => {
    console.log(event.target.value);
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
});

inputDecimal = (dot) => {
    if(currentNumber.includes('.')){
        return;
    }
    currentNumber += dot;
}


const percentage = document.querySelector('.percentage');

percentage.addEventListener('click', (event) => {
    updateScreen(parseInt(currentNumber)/100);
});