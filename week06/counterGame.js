// prompt:
// Louise and Richard have developed a numbers game. They pick a number and check to see if it is a power of 2. If it is, they divide it by 2. If not, they reduce it by the next lower number which is a power of 2. Whoever reduces the number to 1 wins the game. Louise always starts.

// Given an initial value, determine who wins the game.2]

// Example

//  n = 132

// It's Louise's turn first. She determines that 132 is not a power of 2. The next lower power of 2 is 128, so she subtracts that from 132  and passes 4 to Richard. 4  is a power of 2, so Richard divides it by 2 and passes 2 to Louise. Likewise, 2 is a power so she divides it by 2 and reaches 1. She wins the game.

// Update If they initially set counter to 1, Richard wins. Louise cannot make a move so she loses.

function counterGame(n) {
  let score = 0;
  while (n>1){
      let power = Math.floor(Math.log2(n));
      score +=1;
      Math.pow(2, power)==n? n=n/2: n=Math.pow(2, power);
      console.log(n)    
  }
  if(score % 2== 0){
      return "Louise"
  } else {
      return "Richard"
  }
} 