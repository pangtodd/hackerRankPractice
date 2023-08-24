// prompt:
// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

function solution(nums){
  return nums? nums.sort((a,b)=>a-b) : []
}

// alt solution:
// function solution(nums){
//   if(nums === null) {
//     return [];
//   }
//   for(let i = 0; i < nums.length; i++) {
//     if( nums[i] > nums[i + 1]) {
//       let newNum = nums[i]
//       nums[i] = nums[i + 1];
//       nums[i + 1] = newNum
//       solution(nums);
//     }
//   }
//   return nums;
// }