function miniMaxSum(arr) {
  const sorted = arr.sort((a, b) => a - b);

  const minSum = sorted
    .filter((n, i) => {
      return i !== sorted.length - 1;
    })
    .reduce((acc, n) => acc + n).toString();
  const maxSum = sorted
    .filter((n, i) => {
      return i !== 0;
    })
    .reduce((acc, n) => acc + n).toString();

  return minSum + " " + maxSum;
}

arr = ;

console.log(miniMaxSum(arr));
