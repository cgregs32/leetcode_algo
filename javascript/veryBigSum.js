function aVeryBigSum(ar) {
  return ar.reduce((acc, num) => acc + num);
}

ar = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

console.log(aVeryBigSum(ar));
