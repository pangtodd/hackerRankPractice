prompt:
// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

function isSortedAndHow(array) {
  let asc = [];
  let desc =[];
  for (let i=0; i<=array.length; i++){    
    if(array[i]<array[i+1]){
      desc.push("false");
    }
    if(array[i]>array[i+1]){
        asc.push("false");
      }
  }
  if(asc.length>0 && desc.length>0) return "no"
  return desc.length>0?"yes, ascending":"yes, descending"
}