let firstOperand = ''
let secondOperand = ''
let operator = undefined

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operator]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const clearAllButton = document.querySelector('[data-clear]')
const equationTextElement = document.querySelector('[data-equation]')
const resultTextElement = document.querySelector('[data-result]')


const clear = function () {
    equationTextElement.textContent = ''
    resultTextElement.textContent = 0
    resetValues
}

const resetValues = function () {
    firstOperand = ''
    secondOperand = ''
    operator = undefined
}

const deleteNumber = function() {

}

const appendNumber = function(number) {
    if(resultTextElement.textContent == '0') {
        resetDisplay()
    }
    if(number === '.' && resultTextElement.textContent.includes('.')) return
    resultTextElement.textContent += number
}

const chooseOperation = function(operation) {
    firstOperand = resultTextElement.textContent
    if(secondOperand !== '') compute
    if(firstOperand === '') return
    operator = operation
    equationTextElement.textContent = `${firstOperand} ${operator}`
    resultTextElement.textContent = ""
}

const resetDisplay = function() {
    resultTextElement.textContent = ''

}

// Basic math operators
const add = (a, b) => a + b

const subtract = (a, b) => a - b

const multiply = (a, b) => a * b

const divide = (a, b) => a / b

const operate = function() {
    let result
    secondOperand = resultTextElement.textContent
    const a = parseFloat(firstOperand)
    const b = parseFloat(secondOperand)
            console.log('hello')

    console.log(a)
    console.log(b)

    switch(operator) {
        case '+':
            result = add(a, b)
            break
        case '-':
            result = subtract(a, b)
            break
        case 'x':
            result = multiply(a, b)
            break
        case "÷":
            result = divide(a, b)
    }
    resultTextElement.textContent = result
    equationTextElement.textContent = `${firstOperand} ${operator} ${secondOperand}`
    resetValues
}

clearAllButton.addEventListener('click', clear)

equalsButton.addEventListener('click', operate)

operationButtons.forEach((button) =>
    button.addEventListener('click', () => {
        chooseOperation(button.textContent)
    })
)

numberButtons.forEach((button) =>
    button.addEventListener('click', () => {
        appendNumber(button.textContent)
    })
)
