function minimumSwaps(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    while (arr[i] - 1 != i) {
      replaceTo = arr[i] - 1;
      swap(i, replaceTo);
      count++;
    }
  }

  return count;

  function swap(i, j) {
    var b = arr[i];
    arr[i] = arr[j];
    arr[j] = b;
  }
}

const arr = [2, 3, 4, 1, 5];

console.log(minimumSwaps(arr));
