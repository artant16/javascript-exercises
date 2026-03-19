const fibonacci = function(n) {
  if (n < 0) return "OOPS";
  if (n == 0) return 0;
  if (n == 1) return 1;

  let a = 0;
  let b = 1;
  let nextSum;

  for (let i = 2; i <= n; i++) {
    nextSum = a + b;
    a = b;
    b = nextSum;
  } 
  return b;
};


// Do not edit below this line
module.exports = fibonacci;
