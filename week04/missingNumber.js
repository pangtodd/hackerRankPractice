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
  let answer = [];
  for(let i=0; i<brr.length; i++){
      let querry = brr.shift();
      let position = arr.findIndex(element => element === querry);
      console.log(position)
      console.log(arr)
      if(position == undefined){
          answer.push(querry)
      } else {
          arr.splice(position, 1)
      }
  }
  return answer
}