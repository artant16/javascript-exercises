const palindromes = function (string) {
  const cleanString = string.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reverseString = cleanString.split('').reverse().join('');
  return cleanString === reverseString;
};

// Do not edit below this line
module.exports = palindromes;
