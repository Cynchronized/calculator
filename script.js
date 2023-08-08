let firstNumber;
let operator;
let secondNumber


// Basic math operators
const add = (a, b) => a + b

const subtract = (a, b) => a - b

const multiply = (a, b) => a * b

const divide = (a, b) => a / b

const operate = function(operate, firstNum, secondNum) {
    switch(operate) {
        case "add":
            add(firstNum, secondNum)
            break
        case "subtract":
            subtract(firstNum, secondNum)
            break
        case "multiply":
            multiply(firstNum, secondNum)
            break
        case "divide":
            divide(firstNum, secondNum)
    }
}
