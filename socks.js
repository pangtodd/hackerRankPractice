There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

Example
n= 7
ar=[1,2,1,2, 1,3,2]


There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. The number of pairs is 2.




// function twoArrays(k, A, B) {
//   const sortedA = A.sort(function(a, b) {return a - b;});
//   let sortedB = B.sort(function(a, b) {return a - b;});
//   let score = 0;
//   for (let i = 0; i <A.length; i++){
//       let minSolution = k-sortedA[i];
//       let position = sortedB.findIndex((e) => e >= minSolution);
//       console.log(sortedB);
//       if (position < 0 ){
//           score=+1  
//       } else {
//           sortedB.splice([position],1)
//       }
//   };
//   console.log(score)
  
//   if (score > 0){
//       return "NO"
//   } else {
//       return "YES"
//   }

// }