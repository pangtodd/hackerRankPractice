// prompt:
// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"
// don't worry about uppercase vowels
// y is not considered a vowel for this kata

function shortcut (string) {
  const vowel="aeiou";
  let answer = ""
  for(let i=0; i<string.length; i++){
    if (!vowel.includes(string[i])) answer +=string[i]
  }
  return answer;
}

// alt solution:
// function shortcut(string){
//   return string.replace(/[aeiou]/g,'')
// }