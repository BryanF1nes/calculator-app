const result = document.querySelector('#result');
const display = document.querySelector('#equation');
const numBtns = document.querySelectorAll('#numKeys');

let a = '';
let b = '';
let output = '';
let lastValue = '';

let addChecked = false;
let minusChecked = false;
let multiplyChecked = false;
let divideChecked = false;
let remainderChecked = false;

numBtns.forEach((key) => {
    key.addEventListener('click', () => {
        // sets an animation class
        key.classList.add('click')
        // removes an animation class
        setTimeout(() => {
            key.classList.remove('click');
        }, 250);

        // gets inputed values on screen
        const value = key.dataset.key;

        if (value == 'clear') {
            display.textContent = '';
            result.textContent = '';
            lastValue = '';
            a = '';
            b = '';
            addChecked = false;
            minusChecked = false;
            multiplyChecked = false;
            divideChecked = false;
            remainderChecked = false;
        }
        else if (value === 'back') {
            display.textContent = '';
            result.textContent = '';
            lastValue = '';
            a = '';
            b = '';
        }  
        else if (value == '+') {
            a = display.textContent;
            addChecked = true;
            display.textContent = '';
            if (lastValue !== '') {
                a = lastValue;
            }
        } 
        else if (value == '-') {
            a = display.textContent;
            minusChecked = true;
            display.textContent = '';
            if (lastValue !== '') {
                a = lastValue;
            }
        }
        else if (value == '*') {
            a = display.textContent;
            multiplyChecked = true;
            display.textContent = '';
            if (lastValue !== '') {
                a = lastValue;
            }
        }
        else if (value == '/') {
            a = display.textContent;
            divideChecked = true;
            display.textContent = '';
            if (lastValue !== '') {
                a = lastValue;
            }
        }
        else if (value == '%') {
            a = display.textContent;
            remainderChecked = true;
            display.textContent = '';
            if (lastValue !== '') {
                a = lastValue;
            }
        }
        else if (value == '=') {
            b = display.textContent;
            if (addChecked = true && minusChecked === false && divideChecked === false && multiplyChecked === false) {
                addNums(a, b);
                addChecked = false;
            }
            else if (minusChecked = true && addChecked === false && divideChecked === false && multiplyChecked === false) {
                subtractNums(a, b);
                minusChecked = false;
            }
            else if (multiplyChecked = true && minusChecked === false && divideChecked === false && addChecked === false) {
                multiplyNums(a, b);
                multiplyChecked = false;
            }
            else if (divideChecked = true && minusChecked === false && addChecked === false && multiplyChecked === false) {
                divideNums(a, b);
                divideChecked = false;
            }
        } else {
            display.textContent += value;
        }
    });
});

// Addition function
function addNums(num1, num2) {
    output = parseFloat(num1) + parseFloat(num2);
    lastValue = output;
    result.textContent = output.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    if(result.textContent.length >= 7) {
        result.style.fontSize = '32px';
    } else {
        result.style.fontSize = '48px';
    }
}

// Subtraction function
function subtractNums(num1, num2) {
    output = parseFloat(num1) - parseFloat(num2);
    lastValue = output;
    result.textContent = output.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    if(result.textContent.length > 7) {
        result.style.fontSize = '32px';
    }
}
    
// Multiplication function
function multiplyNums(num1, num2) {
    output = parseFloat(num1) * parseFloat(num2);
    lastValue = output;
    result.textContent = output.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    if(result.textContent.length > 7) {
        result.style.fontSize = '32px';
    }
}
        
// Divide function
function divideNums(num1, num2) {
    output = parseFloat(num1) / parseFloat(num2);
    if (parseFloat(num1) == 0 || parseFloat(num2) == 0) {
        result.textContent = `Oh that's cute. You tried dividing by 0.`;
        if(result.textContent.length > 7) {
            result.style.fontSize = '16px';
        }
        return;
    }
    lastValue = output;
    result.textContent = output.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,');
}

function remainder(num1, num2) {
    output = parseFloat(num1) % parseFloat(num2);
    lastValue = output;
    result.textContent = output.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,');
}

// handles large ouputs
            
