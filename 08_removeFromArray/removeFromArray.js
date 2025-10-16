const removeFromArray = function(arr, ...arrRemove) {
  return arr.filter((num) => !arrRemove.includes(num))
};

// Do not edit below this line
module.exports = removeFromArray;
