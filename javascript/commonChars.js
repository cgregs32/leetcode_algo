var commonChars = function(A) {
  arrHash = A.map((str, i) => {
    hash = {};
    str.split("").forEach((letter, i) => {
      hash[letter] ? hash[letter]++ : (hash[letter] = 1);
    });
    return hash;
  });

  const keep = [];
  A[0].split("").forEach((char, i) => {
    let existsInAll = arrHash.slice(1).every((obj, innerI) => {
      if (obj[char]) {
        obj[char] -= 1;
        return true;
      } else {
        return false;
      }
    });
    if (existsInAll) keep.push(char);
  });
  return keep;
};

// {
//   b: 1
//   e: 3
//   l: 3
//   2: {l : 3}
//   a: 2
// }
const value = ["cool", "lock", "cook"];
// Output: ["e","l","l"]

console.log(commonChars(value));
