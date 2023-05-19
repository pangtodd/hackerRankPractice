// prompt:
// implement a modified Fibonacci sequence using the follwing definition:

// given terms t[i] and t[i+1] where i (1, infinity), term t[i+2] is computed as:

// t i+2 = t i + (t i+1)squared

// Given three integers, t1, t2 and n, compute and print the nth term of a modified fibonacci sequecnce.

// Example:
// t1= 0
// t2 =1
// n = 6
// -t3 = 0 + 1squared = 1
// -t4 = 1 + 1squared = 2
// -t5 = 1 + 2squared = 5
// -t6 = 2 + 5squared = 27

// function fibonacciModified(t1, t2, n) {
//   let first = t1;
//   let second = t2;
//   let third = 0;
//   for (let i = 0; i < n - 2; i++) {
//     third = first + second ** 2;
//     first = second;
//     second = third;
//   }
//   console.log(third)
// }

function fibonacciModified(t1, t2, n) {
  let first = BigInt(t1);
  let second = BigInt(t2);
  let third = BigInt(0);
  for (let i = 0; i<n-2; i++){
    third = first + second **BigInt(2);
    first =second;
    second= third
  }
  console.log(third.toString())
}

