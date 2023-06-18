// prompt:
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x){
  return  x.map(number=>parseInt(number)).reduce((a,b)=>a+b)
 }

//  alt solution:
//  function sumMix(x){
//   let result = 0;
//   for (let n of x) {
//     result += parseInt(n);
//   }
//   return result;
// }
