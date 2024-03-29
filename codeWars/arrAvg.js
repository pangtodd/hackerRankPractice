// prompt:
// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.


function findAverage(array) {
  return array.length == 0? 0: array.reduce((a,b)=>a+b)/array.length
}

// alt solution:
// function find_average(array) {
//   if (array.length === 0) {
//   return 0;
//   }
//   var result = 0;
//   for (i=0; i<array.length; i++) {
//     result +=array[i];
//   }
//   return result/array.length;
// }