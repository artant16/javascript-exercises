const sumAll = function(a, b) {
  let difference = Math.abs(a - b);
  let arrSum = [a];

  if ((a <= 0 || b <= 0) || 
      (a % 1 !== 0 || b % 1 !== 0) ||
      (typeof a === "string" || typeof b === 'string')) {
    return "ERROR";
  }
  else if (a <= b) {
    for (let i = 1; i <= difference; i++) {
      arrSum.push(a += 1);
    }
  } else {
    for (let i = 1; i <= difference; i++) {
      arrSum.push(a -= 1);
    }
  }

  let result = arrSum.reduce((sum, curr) => sum + curr, 0);
  return result;
};

// Do not edit below this line
module.exports = sumAll;
