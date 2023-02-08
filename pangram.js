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
  score>0 ? x = "not pangram": x= "pangram";
  return 
}

// alt solution:
// function pangrams(s) {
//   if (s.length < 26) {
//     return "not pangram";
//   }

//   const stringArr = s.toLowerCase().replace(/\s/g, "").split("");
//   let set = new Set(stringArr);
//   return set.size === 26 ? "pangram" : "not pangram";
// }