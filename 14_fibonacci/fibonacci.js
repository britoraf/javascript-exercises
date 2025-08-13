const fibonacci = function (position) {
  let fibonacciArray = [0, 1];
  if (position >= 0) {
    for (let i = 0; i <= 100; i++) {
      fibonacciArray.push(fibonacciArray[i] + fibonacciArray[i + 1])
    }
  } else return "OOPS";
 return fibonacciArray[position];
}

// Do not edit below this line
module.exports = fibonacci;
