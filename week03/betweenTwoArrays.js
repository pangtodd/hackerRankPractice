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
  let answers = []
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
  console.log("afoctors" + aFactors)

  for (let l = 0; l < b.length; l++) {
    for (let m = 0; m < aFactors.length; m++) {
      console.log("b:"+ b[l] +  " aFact:"+ aFactors[m])
      if (b[l] % aFactors[m] === 0) {
        answers.push(aFactors[m]);
      }
    }
  }
  console.log(answers)
  const finalAnswer = [...new Set(answers)];
  console.log("answer" + finalAnswer)

  return finalAnswer.length;
}

const input = {
  aOne: [2, 6],
  bOne: [24, 36],
  aTwo: [2, 4],
  bTwo: [16, 32, 96],
  aThree: [2],
  bThree: [20, 30, 12],
  afour: [3, 9, 6],
  bFour: [36, 72],
  aFive: [1],
  bfive: [100],
  aSix: [2, 3, 6],
  bSix: [42, 84],
  aSeven: [1],
  bSeven: [72, 48],
  aEight: [3, 4],
  bEight: [24, 48],
};
