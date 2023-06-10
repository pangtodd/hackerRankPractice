// prompt:
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 
// 1 squared = 1
// 2 squared = 4
// 2 sqared = 4
// summed = 9

function squareSum(numbers){
  const squared = numbers.map(number=> number*number);
  return squared.reduce((a,c)=>a+c, 0)
}

alt solution:
function squareSum(numbers){
  return numbers.reduce((sum,num) => sum + (num * num), 0);
}