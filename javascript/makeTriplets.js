function compareTriplets(a, b) {
  const pointObj = { a: 0, b: 0 };
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) continue;
    a[i] > b[i] ? pointObj["a"]++ : pointObj["b"]++;
  }
  return Object.keys(pointObj).map(key => pointObj[key]);
}

a = [5, 6, 7];
b = [3, 6, 10];

console.log(compareTriplets(a, b));
