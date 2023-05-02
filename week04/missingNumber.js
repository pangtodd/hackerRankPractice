// Prompt:
// Given two arrays of integers, find which elements in the second array are missing from the first array.

// Example

// arr = [7,2,5,3,5,3]
// brr = [7, 2, 5, 4, 6, 3, 5, 3]

// The brr array is the orginal list. The numbers missing are [4, 6].

// Notes

// * If a number occurs multiple times in the lists, you must ensure that the frequency of that number in both lists is the same. If that is not the case, then it is also a missing number.
// *Return the missing numbers sorted ascending.
// *Only include a missing number once, even if it is missing multiple times.
// *The difference between the maximum and minimum numbers in the original list is less than or equal to 100.

function missingNumbers(arr, brr) {
  for(let i=0; i<arr.length; i++){
      let position = brr.findIndex(element => element == arr[i]);
      if(position != undefined){
          brr.splice(position, 1)
      }
  }
  let filteredBrr = [...new Set(brr)];
  return filteredBrr.sort((a,b)=>(a-b))
}

// alt solution:

// function missingNumbers(brr, arr){
//   brr.sort((a,b)=>a-b)
//   for(let i = 0; i<arr.length;i++){
//       brr.splice(brr.indexOf(arr[i]), 1)
//   }
//   return [...new Set(brr)];
// }