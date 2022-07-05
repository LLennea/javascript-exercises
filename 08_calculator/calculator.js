const add = function(x, y) {
	return x + y
};

const subtract = function(x, y) {
	return x - y
};

const sum = function(arr) {
	return arr.reduce((total, currentNum) => total + currentNum, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, currentNum) => total * currentNum, 1);
};

const power = function(x, y) {
	return x ** y
};

const factorial = function(num) {
  if (num === 0) {
    return 1
  };
  let total = num;
  while (num > 1) {
    num -= 1;
    total *= num;
  }
  return total
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
