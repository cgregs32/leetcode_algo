function twoStrings(s1, s2) {
  const charHash = {};
  s1.split("").forEach((letter, i) => {
    charHash[letter] = charHash[letter] + 1 || 1;
  });

  let match = "NO";
  s2.split("").forEach(letter => {
    if (charHash[letter] >= 1) match = "YES";
  });
  return match;
}

s1 = "hackerrankcommunity";
s2 = "cdecdecdecde";
// s1 = "wouldyoulikefries";
// s2 = "abcabcabcabcabcabc";
console.log(twoStrings(s1, s2));
