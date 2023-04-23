// prompt:
// You will be given a list of integers, arr , and a single integer k. You must create an array of length k from elements of arr such that its unfairness is minimized. Call that array arr'. Unfairness of an array is calculated as

// max(arr')-min(arr')

// Where:
// - max denotes the largest integer in 
// - min denotes the smallest integer in

function maxMin(k, arr) {
  const sorted = arr.sort((a,b)=>(a-b)).reverse();
  let minScore= sorted[0]-sorted[k-1]
  for (let i=0; i<arr.length; i++){
      let iDiff = sorted[i]-sorted[i+(k-1)]
     if(iDiff<minScore){
         minScore= iDiff
     }
  }
  return minScore
}

// alt solution:
//   function maxMin(k, arr) {
//   arr.sort((a,b)=>a-b)
//   let count = arr[k-1]-arr[0]
//   for(let i = 1; i<arr.length-k+1;i++){
//     count=Math.min(count,arr[i+k-1]-arr[i])
//   }
//   return count
// }