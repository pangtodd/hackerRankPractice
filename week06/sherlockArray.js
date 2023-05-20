// prompt:
// Watson gives Sherlock an array of integers. His challenge is to find an element of the array such that the sum of all elements to the left is equal to the sum of all elements to the right.

// Example

// arr = [5, 6, 8, 11]

// The answer is YES 8 is between two subarrays that sum to 11.

// arr = [1]

// The answer is YES since left and right sum to 0.


// You will be given arrays of integers and must determine whether there is an element that meets the criterion. If there is, return YES. Otherwise, return NO.

function balancedSums(arr) {
  let answer = "NO";
  let totalSum = BigInt(arr.reduce((a, b) => a + b, 0));
  let left = BigInt(0);
  
  for (let i = 0; i < arr.length; i++) {
    let right = totalSum - left - BigInt(arr[i]);
    
    if (left === right) {
      answer = "YES";
      break;
    }
    
    left += BigInt(arr[i]);
  }
  
  return answer;
}

// alt solution:
// function balancedSums(arr) {
//   let sumLeft = 0;
//   let sumRigth = arr.reduce((acc, cur) => acc + cur);
//   for(let i = 0; i < arr.length; i++) {
//    sumLeft += arr[i - 1] || 0;
//    sumRigth -= arr[i];
//    if(sumRigth === sumLeft) return "YES";
//   }
//   return "NO"
// }
