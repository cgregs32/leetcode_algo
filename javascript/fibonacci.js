// var fib = function(N) {
//   const fib = [];

//   let i = 0;
//   while (i < N + 1) {
//     i <= 1 ? fib.push(i) : fib.push(fib[i - 1] + fib[i - 2]);
//     i++;
//   }
//   return fib.slice(-1).reduce((total, num) => {
//     return total + num;
//   }, 0);
// };

// recursion single number
const fib = N => {
  if (N <= 1) {
    return 1;
  }
  const next = fib(N - 1) + fib(N - 2);

  return next;
};

console.log(fib(10));
