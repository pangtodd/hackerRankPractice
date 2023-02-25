// prompt:
// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix  is shown below:
// 1 2 3
// 4 5 6
// 9 8 9

// The left-to-right diagonal = 1 + 5 + 9. total is 15
// The right to left diagonal = 3 + 5_ 9. Total is 17
// Their absolute difference is 2 .

function diagonalDifference(arr) {
  let startLeftScore=0;
  let startRightScore=0;
  for(let i = 0; i < arr.length; i++){
      startLeftScore = startLeftScore + arr[i][i];
      startRightScore = startRightScore + arr[i].reverse()[i];  
  }
  return Math.abs(startLeftScore - startRightScore )
} 

// alt solution:
// let pSum = 0;
// let sSum = 0;
// arr.forEach((item, i) => {
//     pSum += item[i];
//     sSum += item[(item.length - i - 1)]
// });
// return Math.abs(pSum - sSum);