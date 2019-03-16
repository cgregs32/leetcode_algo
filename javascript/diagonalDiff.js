function diagonalDifference(arr) {
  let a = 0;
  let b = 0;
  for (let i = 0; i < arr.length; i++) {
    a += arr[i][i];
    b += arr[i][arr.length - 1 - i];
  }
  return Math.abs(a - b);
}

arr = [[11, 2, 4], [4, 5, 6], [10, 8, -12]];

console.log(diagonalDifference(arr));
