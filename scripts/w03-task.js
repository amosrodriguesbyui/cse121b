/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);
    
    document.querySelector("#sum").value = add(addNumber1, addNumber2);
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers);

/* Function Expression - Subtract Numbers */

function subtract(number1, number2) {
    return number1 - number2;
}

function subtractNumbers() {
    let subtract1 = Number(document.querySelector("#subtract1").value);
    let subtract2 = Number(document.querySelector("#subtract2").value);
    
    document.querySelector("#difference").value = subtract(subtract1, subtract2);
}

document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers);

/* Arrow Function - Multiply Numbers */

function multiply(number1, number2) {
    return number1 * number2;
}

function multiplyNumbers() {
    let factor1 = Number(document.querySelector("#factor1").value);
    let factor2 = Number(document.querySelector("#factor2").value);
    
    document.querySelector("#product").value = multiply(factor1, factor2);
}

document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers);

/* Open Function Use - Divide Numbers */

function divide(number1, number2) {
    return number1 / number2;
}

function divideNumbers() {
    let dividend = Number(document.querySelector("#dividend").value);
    let divisor = Number(document.querySelector("#divisor").value);
    
    document.querySelector("#quotient").value = divide(dividend, divisor);
}

document.querySelector("#divideNumbers").addEventListener("click", divideNumbers);


/* Decision Structure */

function calculateTotalDue() {
    const subtotalInput = document.querySelector("#subtotal").value;

    const subtotal = parseFloat(subtotalInput) || 0;

    const applyDiscount = document.querySelector("#member").checked;

    const discountedSubtotal = applyDiscount ? subtotal * 0.8 : subtotal;

    const totalDue = discountedSubtotal.toFixed(2);

    document.querySelector("#total").textContent = totalDue;
}

document.querySelector("#getTotal").addEventListener("click", calculateTotalDue);


/* ARRAY METHODS - Functional Programming */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

/* Output Source Array */
document.querySelector("#array").innerHTML = numbersArray;

/* Output Odds Only Array */
document.querySelector("#odds").innerHTML = numbersArray.filter(number => number % 2 !== 0);

/* Output Evens Only Array */
document.querySelector("#evens").innerHTML = numbersArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */
const sumOfArray = numbersArray.reduce((sum, number) => sum + number);
document.querySelector("#sumOfArray").innerHTML = sumOfArray;

/* Output Multiplied by 2 Array */
const multipliedArray = numbersArray.map(number => number * 2);
document.querySelector("#multiplied").innerHTML = multipliedArray;

/* Output Sum of Multiplied by 2 Array */
const sumOfMultiplied = multipliedArray.reduce((sum, number) => sum + number, 0);
document.querySelector("#sumOfMultiplied").innerHTML = sumOfMultiplied;