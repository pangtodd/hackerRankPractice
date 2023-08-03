// prompt:
// You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

// Example
// candles = [4,4,1,3]

// The maximum height candles are 4 units high. There are 2 of them, so return 2.

// Function Description

// Complete the function birthdayCakeCandles in the editor below.

// birthdayCakeCandles has the following parameter(s):

// int candles[n]: the candle heights
// Returns

// int: the number of candles that are tallest

function birthdayCakeCandles(candles) {
  let size =0;
  let count = 0;
  for (let i = 0; i<candles.length; i++){
      if (candles[i]> size){
          size = candles[i];
          count = 1;
      } else if (candles[i]==size){
          count +=1;
      }
  }
  return count
}

// alt solution:
// function birthdayCakeCandles(candles: number[]) : number {
//   const maxVal = Math.max(...candles);
//   return candles.filter(item => item === maxVal).length
// }