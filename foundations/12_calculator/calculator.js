const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(args) {
  let sum = 0
  args.forEach(element => {
    sum+=element
  });
  return sum
};

const multiply = function(args) {
  let multiply_v = 1
  args.forEach(element => {
    multiply_v *= element
  });
  return multiply_v
};

const power = function(a, n) {
	power_v = 1
  for (let i = 0; i < n; i++){
    power_v *= a
  }
  return power_v
};

const factorial = function(a) {
	let factorial_v = 1
  for (let i = a; i >= 1; i--){
    factorial_v *= i
  }
  return factorial_v
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
