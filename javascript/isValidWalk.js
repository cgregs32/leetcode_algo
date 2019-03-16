function isValidWalk(walk) {
  const walkHash = { n: 0, s: 0, e: 0, w: 0 };
  if (walk.length !== 10) return false;
  walk.forEach(direction => {
    walkHash[direction] ? walkHash[direction]++ : (walkHash[direction] = 1);
  });
  return walkHash.n === walkHash.s && walkHash.e == walkHash.w;
}

const walk = ["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"];

console.log(isValidWalk(walk));
