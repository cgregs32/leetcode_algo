function plusMinus(arr) {
  const numHash = { pos: 0, neg: 0, zero: 0 };

  arr.forEach(num => {
    if (num >= 1) {
      numHash["pos"] = numHash["pos"] + 1 || 1;
    } else if (num == 0) {
      numHash["zero"] = numHash["zero"] + 1 || 1;
    } else {
      numHash["neg"] = numHash["neg"] + 1 || 1;
    }
  });
  console.log(numHash);
  Object.keys(numHash).forEach(key => {
    console.log((numHash[key] / arr.length).toFixed(6));
  });
}

arr = [-4, 3, -9, 0, 4, 1];

plusMinus(arr);
