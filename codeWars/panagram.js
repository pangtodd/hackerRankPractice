// prompt:
// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string){
  const alpha="abcdefghijklmnopqrstuvwxyz";
  let score = 0;
  for (let i=0; i<alpha.length; i++){
    if (string.toLowerCase().includes(alpha[i])==false){
      score +=1
    } 
  }
  return score > 0? false: true;
}

alt solution:
function isPangram(string){
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
    return string.indexOf(x) !== -1;
  });
}