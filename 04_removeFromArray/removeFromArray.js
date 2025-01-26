const removeFromArray = function(array, ...arg) {
  let result = array.filter(item => !arg.includes(item));
  return result
};


// Do not edit below this line
module.exports = removeFromArray;
