// prompt:
// (actually from HackerRank)
// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

// Example:
// arr= [1, 3, 5, 7, 9]

// min sum = 1+ 3+5+7=16. Max sum = 3+5+7+9 = 25

//  The function prints

// 16 24

function miniMaxSum(arr) {
  const sum = arr.reduce((a,b)=>a+b);
  const sortedArr = arr.sort((a,b)=>a-b);
  const mini = sum - sortedArr[sortedArr.length-1];
  const maxi = sum - sortedArr[0]
  console.log( mini, maxi)
}