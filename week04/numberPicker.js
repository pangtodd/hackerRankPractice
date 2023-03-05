// Given an array of integers, find the longest subarray where the absolute difference between any two elements is less than or equal to 1.

// Example:

// a= [1, 1, 2, 2, 4, 4, 5, 5, 5]


// There are two subarrays meeting the criterion: [1, 1, 2, 2,]  and [4, 4, 5, 5, 5] . The maximum length subarray has 5, elements.

function pickingNumbers(a) {
  let counts = {};
  const noDupes = [...new Set(a)].sort((a, b) => (a - b));
  let score = 0;
  for (let i = 0; i < a.length; i++) {
    counts[a[i]] = counts[a[i]] ? counts[a[i]] + 1 : 1;
  }
  for (let j = 0; j < noDupes.length; j++) {
    if (counts[noDupes[j]] > score) {
      score = counts[noDupes[j]]
    };
    if (Math.abs(noDupes[j + 1] - noDupes[j]) <= 1 && counts[noDupes[j + 1]] + counts[noDupes[j]] > score) {
      score = counts[noDupes[j + 1]] + counts[noDupes[j]]
    }
  }
  return score
}

// alt solution:

// const _arr = new Array(100).fill(0)
// let max = 0 
// for(let i = 0; i<a.length;i++){
//     _arr[a[i]]++
//     if(_arr[a[i]] + _arr[a[i]-1] > max){
//         max = _arr[a[i]] + _arr[a[i]-1]
//     }
//     if(_arr[a[i]] + _arr[a[i]+1] > max){
//         max = _arr[a[i]] + _arr[a[i]+1]
//     }
// }
// return max