// prompt:
// Your task is to write function factorial.

// https://en.wikipedia.org/wiki/Factorial

function factorial(n){
  //   return n > 1 ? n * factorial(n - 1) : 1;
    let answer= 1
    for(let i =1; i<=n; i++){
      answer*=i
    }
    return answer
  }

  // alt solution:
  // const factorial = n => n ? factorial(n - 1) * n : 1;
