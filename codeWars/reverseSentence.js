// prompt:
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  const eachWord = str.split(' ');
  let answer = [];
  for (let i = 0; i < eachWord.length; i++) {
    console.log(eachWord[i])
    answer.push(eachWord[i].split('').reverse().join(''))
  }
  return answer.join(" ")
}

// alt solution:
// function reverseWords(str) {
//   return str.split("").reverse().join("").split(" ").reverse().join(" ");
// }