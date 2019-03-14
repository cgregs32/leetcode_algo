var arrayPairSum = function(nums) {
  const sorted = nums.sort((a, b) => a - b);

  let num = 0;
  for (let i = 0; i < sorted.length; i += 2) {
    num += sorted[i];
  }
  return num;
};

const arr = [6214, -2290, 2833, -7908];

console.log(arrayPairSum(arr));
