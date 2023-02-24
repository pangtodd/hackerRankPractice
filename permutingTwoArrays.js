// There are two n-element arrays of integers, A  and B. Permute them into some A' and B' such that the relation A'[i]+ B'[i] ≥ k holds for all i where O ≤ i< n.

// There will be q queries consisting of A, B, and k. For each query, return YES if some permutation A',B' satisfying the relation exists. Otherwise, return NO.

// Example:
// k= 10
// A = [2, 1, 3]
// B = [7, 8, 9]
// YES

// k=5
// A= [1, 2, 2, 1]
// B= [3, 3, 3, 4]
// NO 

function twoArrays(k, A, B) {
  const sortedA = A.sort(function(a, b) {return a - b;});
  let sortedB = B.sort(function(a, b) {return a - b;});
  let score = 0;
  for (let i = 0; i <A.length; i++){
      let minSolution = k-sortedA[i];
      let position = sortedB.findIndex((e) => e >= minSolution);
      console.log(sortedB);
      if (position < 0 ){
          score=+1  
      } else {
          sortedB.splice([position],1)
      }
  };
  console.log(score)
  
  if (score > 0){
      return "NO"
  } else {
      return "YES"
  }

}
