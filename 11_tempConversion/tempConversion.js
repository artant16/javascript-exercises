const convertToCelsius = function(f) {
  if (((f - 32) / 1.8) % 1 === 0) {
    return ((f - 32) / 1.8);
  } 
  return Number(((f - 32) / 1.8).toFixed(1));
};

const convertToFahrenheit = function(c) {
  if (((c * 1.8 + 32)) % 1 === 0) {
    return (c * 1.8 + 32);
  }
  return Number((c * 1.8 + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
