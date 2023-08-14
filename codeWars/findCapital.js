// prompt:
// Instructions
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

// Example (Input --> Output)
// "CodEWaRs" --> [0,3,4,6]

var capitals = function (word) {
	const test = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let answer=[];
  for(let i = 0; i<word.length; i++){
    if (test.includes(word[i])) {
      answer.push(i)
      }
  }
  return answer
};

// alt solution:
// var capitals = function (word) {
//   var caps = [];
// 	for(var i = 0; i < word.length; i++) {
//     if(word[i].toUpperCase() == word[i]) caps.push(i);
//   }
//   return caps;
// };