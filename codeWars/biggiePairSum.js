// prompt:
// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
// Input sequence contains minimum two elements and every element is an integer.

// function largestPairSum (numbers) {
//   const biggie = Math.max(...numbers)
//   let adjNum = numbers.slice(0,numbers.indexOf(biggie)).concat(numbers.slice(numbers.indexOf(biggie)+1,))
//   return biggie + Math.max(...adjNum)
// }
// Math.max iterates each array? Not too performant.

// function largestPairSum (numbers) {
//   const sortedDesc = numbers.sort((a,b)=>a-b)
//   return sortedDesc[numbers.length-1]+sortedDesc[numbers.length-2]
// }
// Sort not too performant. Dumb loop might be more efficient.

function largestPairSum(numbers) {
  let biggie = -Infinity;
  let secondBiggie = -Infinity;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > biggie) {
      secondBiggie = biggie;
      biggie = numbers[i];
    } else if (numbers[i] > secondBiggie) {
      secondBiggie = numbers[i];
    }
  }
  return biggie + secondBiggie;
}
