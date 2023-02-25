// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// Example
// n= 7
// ar=[1,2,1,2, 1,3,2]


// There is one pair of color 1 and one of color 2. There are three odd socks left, one of each color. The number of pairs is 2.


function sockMerchant(n, ar) {
  let pairs = 0
  while (ar.length>1){
      let match = ar.shift();
      let matchPosition = ar.indexOf(match);
      if(matchPosition>-1){
          pairs++;
          ar.splice([matchPosition],1);
      } 
  }
  return pairs;
}

// alternate solution:
// function sockMerchant(_, socks) {
//   const map = new Map();
//   let count = 0;
//   for (let sock of socks) {
//       map.set(sock, map.get(sock) + 1 || 1)
//       if(map.get(sock) % 2 == 0) {
//           count++
//       }
//   }
//   return count
// }