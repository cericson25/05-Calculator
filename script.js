const add = function (a, b) {
  return a + b;
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
  //calls operation functions with input numbers
  if (operator === "add") {
    outcome = add(num1, num2);
  } else if (operator === "subtract") {
    outcome = subtract(num1, num2);
  } else if (operator === "multiply") {
    outcome = multiply(num1, num2);
  } else if (operator === "divide") {
    outcome = divide(num1, num2);
  } else {
    return "invalid operator";
  }
  return outcome;
};

console.log(operate("divide", 3, 4));
