const display = document.querySelector(".display");
const numberButtons = document.querySelectorAll(".num");
const operatorButtons = document.querySelectorAll(".operator");
const clearButton = document.querySelector("#clear");
const equalsButton = document.querySelector("#equals");
const decimalButton = document.getElementById(".");

let firstNum = "";
let secondNum = false;
let operator = "";
let recursive = false;
let decimal = false;

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

decimalButton.addEventListener("click", (e) => {
  if (decimal === true) return;
  if (secondNum === false) {
    if (firstNum && recursive) {
      firstNum = 0;
    }
    firstNum += decimalButton.id;
    display.innerText = firstNum;
  } else {
    if (!secondNum) {
      secondNum = "0.";
    } else {
      secondNum += decimalButton.id;
    }
    display.innerText = firstNum + " " + operator + " " + secondNum;
  }
  decimal = true;
  recursive = false;
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!firstNum || firstNum === ";)") return;

    if (operator) {
      firstNum = operate(operator, firstNum, secondNum);
    }
    operator = button.id;
    secondNum = "";
    decimal = false;

    display.innerText = firstNum + " " + operator;
  });
});

clearButton.addEventListener("click", () => {
  if (secondNum !== false) {
    secondNum = false;
  }
  firstNum = "";
  decimal = false;
  display.innerText = 0;
});

equalsButton.addEventListener("click", () => {
  if (firstNum && secondNum && operator) {
    firstNum = operate(operator, firstNum, secondNum);
    display.innerText = firstNum;
    secondNum = false;
    operator = "";
    decimal = false;
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
  console.log(b);
  if (b == 0) {
    return ";)";
  } else {
    return a / b;
  }
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
