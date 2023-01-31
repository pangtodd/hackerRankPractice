// Given an array of integers and a positive integer K, determine the number of (i,j) pairs where i< j and ar[i] + ar[j]  is divisible by k.

// Example:

// ar = [1, 2, 3, 4, 5, 6]
// k = 5

// Three pairs meet the criteria:  [1, 4] [2, 3] and [4, 6]. all create sums divisible by 5, and 1st position is < 2nd position in the array.

function divisibleSumPairs(n, k, ar) {
  // Write your code here
  let answer = [];
  ar.forEach((i) => {
    ar.forEach((j) => {
      let success = [];
      if ((i + j) % k === 0 && i < j) {
        success.push(i, j);
        answer.push(success);
      }
    });
  });
  return answer.length;
}
