//Given an array of integers, where all elements but one occur twice, find the unique element.

// Example
// a= [1,2,3,4,3,2,1]

// The unique element is 4.

function lonelyinteger(a) {
  let answer = 69;
  for(let i = 0; i<a.length; i++){
      if (a.lastIndexOf(a[i]) === a.indexOf(a[i])) {
          answer = i;
      }
  }
  return a[answer];
}

// alt solution:
// function lonelyinteger(a) {
//   let integersMap = new Map()
//   a.map((item) => {
//       const currentElement = integersMap.get(item);
//       if(!currentElement) integersMap.set(item, 1)
//       if(currentElement) integersMap.set(item, currentElement + 1)
//   })
  
//   let lonelyInteger = null
//   for(let [integerKey, integerOccurences] of integersMap.entries()) {
//       if(integerOccurences === 1) lonelyinteger = integerKey
//   }
  
//   return lonelyinteger
// }