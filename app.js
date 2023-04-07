const result = document.querySelector('#result');
const equation = document.querySelector('#equation');
const numBtns = document.querySelectorAll('#numKeys');

let a;
let b;
let output;

numBtns.forEach((key) => {
    key.addEventListener('click', () => {
        // sets an animation class
        key.classList.add('click')
        // removes an animation class
        setTimeout(() => {
            key.classList.remove('click');
        }, 250);

        // gets inputed values on screen
        let value = parseInt(key.textContent);
        equation.textContent = value;
        console.log(value)
    });
});

// handles large ouputs
if (result.textContent.length >= 7) {
    result.style.fontSize = '32px';
    if(result.textContent.length >= 15) {
        result.style.fontSize = '24px';
    }
} else {
    result.style.fontSize = '48px';
}

// Addition function
function addNums(num1, num2) {
    a = num1;
    b = num2;

    output = a + b;
    console.log(output);
}

// Subtraction function
function subtractNums(num1, num2) {
    a = num1;
    b = num2;

    output = a - b;
    console.log(ouput);
}

// Multiplication function
function multiplyNums(num1, num2) {
    a = num1;
    b = num2;

    output = a * b;
    console.log(ouput);
}

// Divide function
function multiplyNums(num1, num2) {
    a = num1;
    b = num2;

    output = a / b;
    console.log(ouput);
}