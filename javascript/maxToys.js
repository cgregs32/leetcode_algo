function maximumToys(prices, k) {
  prices.sort((a, b) => a - b);

  let count = 0;
  let total = 0;
  prices.forEach((price, i) => {
    newTotal = total += price;
    if (newTotal <= k) count++;
  });
  return count;
}

arr = [1, 12, 5, 111, 200, 1000, 10];

k = 50;

console.log(maximumToys(arr, k));
