function birthdayCakeCandles(arr) {
  const max = Math.max(...arr);
  freqHash = {};
  arr.forEach(candle => {
    freqHash[candle] = freqHash[candle] + 1 || 1;
  });

  return freqHash[max];
}

inp = [3, 2, 1, 3];

console.log(birthdayCakeCandles(inp));
