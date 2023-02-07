// prompt:
// An avid hiker keeps meticulous records of their hikes. During the last hike that took exactly (steps) steps, for every step it was noted if it was an uphill,U , or a downhill, D  step. Hikes always start and end at sea level, and each step up or down represents a 1 unit change in altitude. We define the following terms:

// A mountain is a sequence of consecutive steps above sea level, starting with a step up from sea level and ending with a step down to sea level.
// A valley is a sequence of consecutive steps below sea level, starting with a step down from sea level and ending with a step up to sea level.

// Given the sequence of up and down steps during a hike, find and print the number of valleys walked through.

function countingValleys(steps, path) {
  // Write your code here
  let height = 0;
  let answer = 0;
  for(let i = 0; i<steps; i++){
      console.log(height, path[i-1], answer);
      if (path[i]==="D"){
          height--;
      } else {
          height++;
      };
      if (height === 0 && path[i] === "U"){
          answer++;
      };    
  }
  return answer;
}

// alt solution:
// let counter = 0
// let last_step = 0
// let actual = 0
// for(let i = 0; i < steps; i++){
//     actual += "D" == path[i] ? -1 : +1
//     if(actual < 0 && last_step == 0 ){
//         counter++
//     }
//     last_step = actual
// }
// return counter