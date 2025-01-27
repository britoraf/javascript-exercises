const convertToCelsius = function(tempF) {
  let convertedC = (tempF - 32) * 5/9
  return Number(convertedC.toFixed(1))
};

const convertToFahrenheit = function(tempC) {
  let convertedF = (tempC * 9/5) + 32
  return Number(convertedF.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
