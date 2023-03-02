// There will be two arrays of integers. Determine all integers that satisfy the following two conditions:

//    1. The elements of the first array are all factors of the integer being considered
//    2. The integer being considered is a factor of all elements of the second array

// These numbers are referred to as being between the two arrays. Determine how many such numbers exist.

// Example
// a=[2, 6]
// b=[24, 36]

// There are 2 numbers between 6 and 12:
// 6%2 = 0, 6%6=0, 24%6=0, and 36%6=0 for the first value.
// 12%2 = 0, 12%6=0, and 24%12 = 0, 36%12=0 for the second value.
// return 2.


function getTotalX(a, b) {
  let range = [];
  let aFactors = [];
  let answers= []
  for (let i = a[a.length - 1]; i <= b[0]; i++) {
    if (i % a[0] === 0) {
      range.push(i);
    }
  };
  console.log(range);
  for (let j = 0; j < range.length; j++) {
    for (let k = 1; k < a.length; k++) {
      if (range[j] % a[k] === 0) {
        aFactors.push(range[j]);
      }
    }
  }
  console.log(aFactors)

  for (let l = aFactors.length; l >0; l--){
     for (let m = b.length; m> 0; m--){
       if (b[m]%aFactors[l]===0){
         answers.push(aFactors[l]);
       }
     }
   }
   
   const finalAnswer= [...new Set(answers)];
   console.log("answer"+ finalAnswer)

   return finalAnswer.length;
}
