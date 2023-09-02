// prompt:
// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

function capitalize(s){
  let answer= [];
  answer.push(s.split("").map((e,index)=>index%2==0?e.toUpperCase(): e.toLowerCase()).join(""))
  answer.push(s.split("").map((e,index)=>index%2!=0?e.toUpperCase(): e.toLowerCase()).join(""))
  return answer
};

// alt solution:
// function capitalize(s){
//   return [0,1].map(r=>[...s].map((c,i)=>i%2===r?c.toUpperCase():c).join(''));
// };