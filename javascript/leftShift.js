function rotLeft(arr, d) {
  for (var i = 0; i < d; i++) {
    arr.push(arr.shift());
  }
  return arr
}
var result = rotLeft([1, 2, 3, 4, 5], 54)

console.log(result)
