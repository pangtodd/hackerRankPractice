// prompt:
// A left rotation operation on an array of size n shifts each of the array's elements 1 unit to the left. Given an integer, d , rotate the array that many steps left and return the result.

// Example
// d =2 
// arr =[1,2,3,4,5]
// after 2 rotations arr=[3,4,5,1,2]

function rotateLeft(d, arr) {
  let arrString=arr.join("");
  d < arr.length ? d : d % arr.length; 
  let stringAnswer=arrString.substring(d)+arrString.slice(0,d);
  let answer=[];
  for (let i = 0; i<stringAnswer.length; i++){
      answer.push(parseInt(stringAnswer[i]));
  }
  return answer;   
}