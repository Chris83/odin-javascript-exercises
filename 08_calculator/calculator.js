const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(nums) {
	let sum = 0;
  nums.forEach(element => {
    sum += element;    
  });
  return sum;
};

const multiply = function(nums) {
  let  result = 1;
  for(let n=0; n<nums.length; n++){
    result *= nums[n];
  }
  return result;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
  if(num <= 1) return 1;
	return num * factorial(num - 1);
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
