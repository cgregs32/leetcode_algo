var uncommonFromSentences = function(A, B) {
  wordsHash = {};
  (A + " " + B).split(" ").forEach(word => {
    wordsHash[word] ? wordsHash[word]++ : (wordsHash[word] = 1);
  });

  return Object.keys(wordsHash).filter(key => {
    return wordsHash[key] <= 1;
  });
};

(A = "this apple is sweet"), (B = "this apple is sour");

console.log(uncommonFromSentences(A, B));
