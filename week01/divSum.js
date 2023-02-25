Given an array of integers and a positive integer K, determine the number of (i,j) pairs where i< j and ar[i] + ar[j]  is divisible by k.

// Example:

// ar = [1, 2, 3, 4, 5, 6]
// k = 5

// Three pairs meet the criteria:  [1, 4] [2, 3] and [4, 6]. all create sums divisible by 5, and 1st position is < 2nd position in the array.


function divisibleSumPairs(n, k, ar) {
  let count = [];
  for (let i = 0; i < ar.length; i++) {
    for (let j = i ; j < ar.length; j++) {
      if ((ar[i] + ar[j]) % k === 0  && i<j ) {
        count.push([ar[i], ar[j]]);
      }
    }
  }

  return count.length;
}
  
// alternate solution:
// function divisibleSumPairs(n: number, k: number, ar: number[]): number {
//   // Write your code here
//   const arSize = n;
//   let sum = 0;
      
//   for (let i = 0; i < arSize; i++) {
//       for (let j = i + 1; j < arSize; j++) {                
//           if ((ar[i] + ar[j]) % k === 0) {
//               sum++;
//           }
//       }
//   }
      
//   return sum;
// }
