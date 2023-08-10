const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(nums) {
	let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return parseInt(sum)
};

const multiply = function(nums) {
  let currentNum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currentNum = currentNum * nums[i]
  }
  return currentNum
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(a) {
  if (a === 0 || a === 1) {
    return 1
  }
  let n = a
	for (let i = 1; i < a; i++) {
    n = n * (a - i);
  }
  return n
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
