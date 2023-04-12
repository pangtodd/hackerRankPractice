// Prompt
// The absolute difference is the positive difference between two values a  and b, is written |a-b| or |b-a|  and they are equal. If a=3 and b=2, |3-2|=|2-3|=1. Given an array of integers, find the minimum absolute difference between any two elements in the array.

// Example: arr= [-2,2,4]

// There are 3 pairs of numbers: [-2,-2], |[-2,4], [2,4] and . The absolute differences for these pairs are |(-2)-2|=4, (-2)-4|=6 and |2,4|=2. The minimum absolute difference is 2.

function minimumAbsoluteDifference(arr) {
  const sorted = arr.sort((a, b)=>(a-b));
  let tiny = Math.abs(sorted[0]-sorted[1]);
  for (let i=0; i<sorted.length;i++){
      let iGap= Math.abs(sorted[i] - sorted[i+1]);
      if (iGap < tiny) {
          tiny = iGap
      }
  }
  return tiny;
}