// get input and store it as num1
// get second input and stare as num2
// check to see if a "operator" key was pressed
// check to see if = was pressed
// if = was pressed run equation based off the "operator" value
// return the result

const result = document.querySelector('#result');
const display = document.querySelector('#equation');
const numBtns = document.querySelectorAll('#numKeys');

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
        } else {
            display.textContent += value;
        }
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
function addNums(a, b) {
    a + b;
}

// // Subtraction function
// function subtractNums(num1, num2) {
//     a = num1;
//     b = num2;

//     output = a - b;
//     console.log(ouput);
// }

// // Multiplication function
// function multiplyNums(num1, num2) {
//     a = num1;
//     b = num2;

//     output = a * b;
//     console.log(ouput);
// }

// // Divide function
// function multiplyNums(num1, num2) {
//     a = num1;
//     b = num2;

//     output = a / b;
//     console.log(ouput);
// }