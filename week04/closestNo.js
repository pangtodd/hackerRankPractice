// promt:
// Sorting is useful as the first step in many different tasks. The most common task is to make finding things easier, but there are other uses as well. In this case, it will make it easier to determine which pair or pairs of elements have the smallest absolute difference between them.

// Example

// arr = [5, 2, 3, 4, 1]

// Sorted, arr= [1,2,3,4,5]. Several pairs have the minimum difference of 1: [(1,2),(2,3), (3,4), (4,5)]. Return the array [1,2,2,3,3,4,4,5].

function closestNumbers(arr) {
  const sorted = arr.sort((a, b) => (a - b));
  let smallestGap = Math.abs(sorted[0] - sorted[1]);
  let answer = [];
  for(let i=0; i<sorted.length; i++){
    let iGap = Math.abs(sorted[i]-sorted[i+1]);
    if(iGap == smallestGap){
      answer.push(sorted[i], sorted[i +1]);
    } else if (iGap < smallestGap){
      answer = [sorted[i], sorted[i +1]];
      smallestGap = iGap;
    }
  }
  return answer;
}