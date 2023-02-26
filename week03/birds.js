// Given an array of bird sightings where every element represents a bird type id, determine the id of the most frequently sighted type. If more than 1 type has been spotted that maximum amount, return the smallest of their ids.

// Example
// arr=[1,1,2,2,3]

// There are two each of types 1 and 2, and one sighting of type 3. Pick the lower of the two types seen twice: type 1.

// first attempt: works, but too slow. Works like having a nested loop, so not very efficent.
// function migratoryBirds(arr) {
//   let winningBird=0;
//   for(let i=0;i<arr.length;i++){
//       let iArray= arr.filter(bird=>bird === arr[i]);
//       if (iArray.length>winningBird){
//           winningBird = arr[i];
//       };
//   }
//   return winningBird;
// }

function migratoryBirds(arr) {
  const counts = {};
  let score = 0;
  let winner =0;
  for (const num of arr) {
       counts[num] = counts[num] ? counts[num] + 1 : 1;
  };
  for (let i=1; i<6; i++){
      if (counts[i]> score){
          score = counts[i];
          winner= i;
      }
  }
  return winner;
  
}

// function migratoryBirds(arr) {
//   const frequencies = {}
//   let max = {id: -1, value: -1}
  
//   for(let id of arr){
//       frequencies[id] = (frequencies[id] || 0) + 1;                
//       const value = frequencies[id];
//       if(value > max.value) max = {id, value};
//       else if(value == max.value) max.id = Math.min(max.id, id);
//   }
  
//   return max.id
// }