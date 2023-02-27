// Given an array of stick lengths, use 3 of them to construct a non-degenerate triangle with the maximum possible perimeter. Return an array of the lengths of its sides as 3 integers in non-decreasing order.

// If there are several valid triangles having the maximum perimeter:

// 1. Choose the one with the longest maximum side.
// 2. If more than one has that maximum, choose from them the one with the longest minimum side.
// 3. If more than one has that maximum as well, print any one them.
// If no non-degenerate triangle exists, return [-1].

// Example
// sticks = [1,2,3,4,5,10]

// The triplet (1,2,3)  will not form a triangle. Neither will (4,5,6) or (2,3,5) so the problem is reduced to (2,3,4) and (3,4,5) . The longer perimeter is (3,4,5).

function maximumPerimeterTriangle(sticks) {
  let winningArray =[-1];
  let sortSticks = sticks.sort(function(a, b) {return a - b;})
  while (sortSticks.length>2){
      if (sortSticks[0]+sortSticks[1]<=sortSticks[2] || sortSticks[1]+sortSticks[2] <=sortSticks[0] || sortSticks[2]+sortSticks[0]<=sortSticks[1]) {
        sortSticks.splice(0,1);
      } else {
          winningArray=[sortSticks[0], sortSticks[1], sortSticks[2]];
          sortSticks.splice(0,1);
      }
  };       
  return winningArray;
};

// alt solution:
// function maximumPerimeterTriangle(sticks) {
//   sticks.sort((a,b) => a-b)
  
//   for (let idx = sticks.length; idx > 2; idx--) {
//       const triangle = sticks.slice(idx - 3, idx);
//       const [A,B,C] = triangle
//       const isNonDegenerate = A+B>C;
//       if(isNonDegenerate) {
//           return triangle
//       }
//   }
//   return [-1]
// }