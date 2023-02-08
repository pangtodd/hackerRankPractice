// prompt:
// A pangram is a string that contains every letter of the alphabet. Given a sentence determine whether it is a pangram in the English alphabet. Ignore case. Return either pangram or not pangram as appropriate.

function pangrams(s) {
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  const sLowerCase= s.toLowerCase();
  let score = 0;
  for(let i = 0; i < alpha.length; i++){
      if (!sLowerCase.includes(alpha[i])){
          score++;
      }
  }
  if (score>0){
      return "not pangram"
  } else {
      return "pangram"
  }
}