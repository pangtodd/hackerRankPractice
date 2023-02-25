// Prompt:

// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// Example

// arr= [1, 3, 5, 7, 9]

// The minimum sum is 1+3+5+7= 16 and the maximum sum is 3+5+7+9=24. 
// The function prints:
// 16 24

function miniMaxSum(arr) {
  const sortedArray= arr.sort();
  const minSum= sortedArray.reduce((currentSum, a)=>currentSum+a) - arr[4];
  const maxSum= sortedArray.reduce((currentSum, a)=>currentSum+a) - arr[0];
  console.log(minSum + " " + maxSum);
}

// alternate solution: also sorted and used reduce, but used slice to remove the first or last part of the array.
// function miniMaxSum(arr) {
//   const sortedArray = arr.sort();
//   const sumMin = sortedArray.slice(0,4).reduce((a,b) => a + b, 0)
//   const sumMax = sortedArray.slice(1,5).reduce((a,b) => a + b, 0)
//   console.log(`${sumMin} ${sumMax}`)
// }
