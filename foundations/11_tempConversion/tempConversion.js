const convertToCelsius = function(F) {
  let C = (F - 32) / 1.8
  C = Math.round(C * 10) / 10
  return C
};

const convertToFahrenheit = function(C) {
  let F = (C * 1.8) + 32
  F = Math.round(F * 10) / 10
  return F
};

console.log(convertToCelsius(2))
console.log(convertToFahrenheit(2))

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
