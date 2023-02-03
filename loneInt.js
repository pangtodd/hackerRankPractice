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
