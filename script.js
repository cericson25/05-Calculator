const display = document.querySelector(".display");
const numberButtons = document.querySelectorAll(".num");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector("#clear");
const equalsButton = document.querySelector("#equals");

let firstNum = "";
let secondNum = false;
let operator = "";
let recursive = false;

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (secondNum === false) {
      if (firstNum && recursive) {
        firstNum = "";
      }
      firstNum += button.id;
      display.innerText = firstNum;
      recursive = false;
    } else {
      secondNum += button.id;
      display.innerText = firstNum + " " + operator + " " + secondNum;
    }
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!firstNum) return;
    if (operator) {
      firstNum = operate(operator, firstNum, secondNum);
    }
    operator = button.id;
    secondNum = "";
    display.innerText = firstNum + " " + operator;
  });
});

clearButton.addEventListener("click", () => {
  if (secondNum !== false) {
    secondNum = false;
  }
  firstNum = "";
  display.innerText = 0;
});

equalsButton.addEventListener("click", () => {
  if (firstNum && secondNum && operator) {
    firstNum = operate(operator, firstNum, secondNum);
    display.innerText = firstNum;
    secondNum = false;
    operator = "";
    recursive = true;
  }
});

const add = function (a, b) {
  return Number(a) + Number(b);
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};

const operate = function (operator, num1, num2) {
  let outcome;
  //calls operation functions with input numbers
  if (operator === "+") {
    outcome = add(num1, num2);
  } else if (operator === "-") {
    outcome = subtract(num1, num2);
  } else if (operator === "×") {
    outcome = multiply(num1, num2);
  } else if (operator === "÷") {
    outcome = divide(num1, num2);
  }
  return outcome;
};
