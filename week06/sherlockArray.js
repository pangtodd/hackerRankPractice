// prompt:
// Watson gives Sherlock an array of integers. His challenge is to find an element of the array such that the sum of all elements to the left is equal to the sum of all elements to the right.

// Example

// arr = [5, 6, 8, 11]

// The answer is YES 8 is between two subarrays that sum to 11.

// arr = [1]

// The answer is YES since left and right sum to 0.


// You will be given arrays of integers and must determine whether there is an element that meets the criterion. If there is, return YES. Otherwise, return NO.

function balancedSums(arr) {
  let answer = "NO"
  let left = 0;
  let right = 0;
  
  for (let i = 0; i<arr.length; i++) {
      if(arr.length === 1){
          answer = "YES"
      } else if (i<1){
          left = BigInt(0);
          right = BigInt(arr.slice(i+1, ).reduce((a,b)=>a+b));
      } else if (i >= arr.length-1) {
          left = BigInt(arr.slice(0, i).reduce((a,b)=>a+b));
          right = BigInt(0);
      }
      else {
          left = BigInt(arr.slice(0, i).reduce((a,b)=>a+b));
          right = BigInt(arr.slice(i+1, ).reduce((a,b)=>a+b));
      }
      if(left === right){
          answer = "YES"
      } 
  }
  return answer;
}
