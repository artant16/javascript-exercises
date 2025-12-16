const reverseString = function(string) {
  let stringReverse = "";
  
  for (let i = string.length - 1; i >= 0; i--) {
    stringReverse += string[i];
  }
  
  return stringReverse;
};

// Do not edit below this line
module.exports = reverseString;
