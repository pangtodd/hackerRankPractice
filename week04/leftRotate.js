// prompt:
// A left rotation operation on an array of size n shifts each of the array's elements 1 unit to the left. Given an integer, d , rotate the array that many steps left and return the result.

// Example
// d =2 
// arr =[1,2,3,4,5]
// after 2 rotations arr=[3,4,5,1,2]

function rotateLeft(d, arr) {
  let answer=arr.splice(k)
  const second=arr.splice(0,k);
  answer.push(...second);
  return answer
}

// alt solution:
// function rotateLeft(d, arr) {
//   return arr.slice(d,).concat(arr.slice (0,d));
// }