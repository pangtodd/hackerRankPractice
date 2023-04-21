// prompt:
// You will be given a list of integers, arr , and a single integer k. You must create an array of length k from elements of arr such that its unfairness is minimized. Call that array arr'. Unfairness of an array is calculated as

// max(arr')-min(arr')

// Where:
// - max denotes the largest integer in 
// - min denotes the smallest integer in

function maxMin(k, arr) {
  const sorted = arr.sort((a,b)=>(a-b)).reverse();
  console.log(sorted);
  let minScore= sorted[0]-sorted[1]
  for (let i=0; i<arr.length; i++){
      let iDiff = sorted[i]-sorted[i+1]
     if(iDiff<minScore){
         minScore= iDiff
     }
  }
  return minScore
}