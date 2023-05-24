// prompt:
// We define super digit of an integer x using the following rules:

// Given an integer, we need to find the super digit of the integer.

// If x has only 1 digit, then its super digit is x.
// Otherwise, the super digit of x is equal to the super digit of the sum of the digits of x.
// For example, the super digit of 9875 will be calculated as:

// super_digit(9875)   9+8+7+5 =29
// super_digit(29)     2+9 = 11
// super_digit(11)     1+1=2
// super_digit(2)      SUPADIGIT!

// example:
// n= '9875'
// k=4
// The number p is created by concatenating the string n k times so the initial
// p=9875987598759875
// superDigit(p)= superDigit(9875987598759875)
// 9+8+7+5+9+8+7+5+9+8+7+5+9+8+7+5+=116
// superDigit(p)= superDigit(116)
// 1+1+6=8
// superDigit(p)= SuperDigit(8)

function superDigit(n, k) {
  let starter=0;
  for(let i = 0; i<n.length; i++){
     starter +=parseInt(n.toString()[i])
  }
  let superNo = starter*k;
  while(superNo>9){
      let temp = 0;
      for(let i = 0; i<superNo.toString().length; i++){
          temp +=parseInt(superNo.toString()[i])
      }
  superNo = temp;
  }
  return superNo
}

// alt soltuion:
// function superDigit(n, k) {
//   let numStr = `${n}`
// if(numStr.length === 1){
//     return n
// }
  
// let num = numStr.split("").reduce((acc,el)=>acc+ el *1,0);
// let finalNum = num *k;

// let final = `${finalNum}`
// return superDigit(final,1)


// }