// prompt:
// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

const reverseSeq = n => {
  let answer = []
  for (let i = n; i>0; i--){
    answer.push(i)
  }
  return answer
};

// alt solution:
// const reverseSeq = length => Array.from({length}, () => length--)


