// prompt:
// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

function noOdds( values ){
  return values.filter((e)=>e%2==0)
}

// alt solution:
// function noOdds( values ){
//   // Return all non-odd values
//   var goodies = [];
//   for(var i=0; i<values.length;i++){
//       if(values[i]%2 == 0){
//         goodies.push(values[i]);
//       }
//   }
  
//   return goodies;
// }