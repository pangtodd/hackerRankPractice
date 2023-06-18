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
  let bFactors = {};
  let answers = [];
  let counts = {};
  let score = 0;

  for (let i = a[a.length - 1]; i <= b[0]; i++) {
    range.push(i);
  };
  console.log("range: " + range)
  for (let j = 0; j < range.length; j++) {
    for (let k = 0; k < a.length; k++) {
      if (range[j] % a[k] === 0) {
        bFactors[range[j]] = bFactors[range[j]] ? bFactors[range[j]] + 1 : 1;
        if (bFactors[range[j]] === a.length) {
          aFactors.push(range[j]);
        }
      }
    }
  }
  for (let l = 0; l < b.length; l++) {
    for (let m = 0; m < aFactors.length; m++) {
      if (b[l] % aFactors[m] === 0) {
        counts[aFactors[m]] = counts[aFactors[m]] ? counts[aFactors[m]] + 1 : 1;
        if (counts[aFactors[m]] === b.length) {
          score = score + 1
        }
      }
    }
  }

  return score

}


const input = {
  a1: [2, 6],
  b1: [24, 36],
  a2: [2, 4],
  b2: [16, 32, 96],
  a3: [2],
  b3: [20, 30, 12],
  a4: [3, 9, 6],
  b4: [36, 72],
  a5: [1],
  b5: [100],
  a6: [2, 3, 6],
  b6: [42, 84],
  a7: [1],
  b7: [72, 48],
  a8: [3, 4],
  b8: [24, 48],
};

getTotalX(input.a8, input.b8);

alternate solution 1:
function getTotalX(a, b) {
  let count = 0;
  const max = Math.max(...b);
	
  for (let i = 1; i <= max; i++) {
	  if (a.every(num => i % num === 0) && b.every(num => num % i === 0)) count++;
  }
	
  return count;	

// alternate solution2:
function getTotalX(a, b) {
  const arr = [];
  while(arr.length < b[0]) arr.push(arr.length + 1)
  
  let factors = 0;
  arr.forEach((e) => {
    const cond1 = a.every((el) => e % el === 0);
    const cond2 = b.every((el) => el % e === 0);
    if(cond1 && cond2) factors++;
  })
  
  return factors;
}