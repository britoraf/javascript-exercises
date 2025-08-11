const add = function (...args) {
  let numbers = args;
  let calculus = numbers.reduce((acc, curr) => acc + curr, 0);
  return calculus;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  let numbers = arr;
  return numbers.reduce((acc, curr) => acc + Number(curr), 0);
};

const multiply = function (arr) {
  let numbers = arr;
  return numbers.reduce((acc, curr) => acc * Number(curr), 1);
};

const power = function (num1, num2) {
  return Math.pow(num1, num2);
};

const factorial = function (num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
