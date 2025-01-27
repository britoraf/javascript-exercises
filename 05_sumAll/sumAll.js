const sumAll = function (int1, int2) {
  if (int1 > 0 && int2 > 0 && typeof int1 === "number" && typeof int2 === "number" && (int1 % 1 === 0) && (int2 % 1 === 0)) {
    let numMin = Math.min(int1, int2);
    let numMax = Math.max(int1, int2);
    let sum = 0;
    for (let i = numMin; i <= numMax; i++) {
      sum += i;
    }
    return sum
  }
  else return "ERROR"
}

// Do not edit below this line
module.exports = sumAll;
