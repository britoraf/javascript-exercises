const leapYears = function(year) {
  let yearBuffer = year;
  if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
    return true
  }
  else return false

};

// Do not edit below this line
module.exports = leapYears;
