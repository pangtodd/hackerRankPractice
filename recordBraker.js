// prompt:
// Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.

// Example
// scores=[12, 24, 10, 24]

// Scores are in the same order as the games played. She tabulates her results as follows:

//                                      Count
//     Game  Score  Minimum  Maximum   Min Max
//      0      12     12       12       0   0
//      1      24     12       24       0   1
//      2      10     10       24       1   1
//      3      24     10       24       1   1
// Given the scores for a season, determine the number of times Maria breaks her records for most and least points scored during the season.

// the output for this example should be [1, 1] (position 0 = # of times broke high score, position 1 = # of times broke low score)

function breakingRecords(scores) {
  let minTally = 0;
  let minScore = scores[0];
  let maxTally = 0;
  let maxScore= scores[0];
  scores.forEach(element=>{
      if (element > maxScore){
          maxScore=element;
          maxTally ++;
      };
      if (element < minScore){
          minScore= element;
          minTally++;
      }
  })
  let records =[];
  records.push(maxTally);
  records.push(minTally);
  return records;
}


// alternate solution (should have pushed in one line otherwise the same):
// function breakingRecords(scores) {
//   let size = scores.length;
//   let min=scores[0], max=scores[0];
//   let countMin = 0, countMax = 0;
//   let arr = [];
//   for (let i=0; i<size; i++) {
//       if(scores[i]>max){
//           max = scores[i];
//           countMax++;
//       }
//       if(scores[i]<min){
//           min = scores[i];
//           countMin++;
//       }
//   }
//   arr.push(countMax, countMin);
//   return arr;
// }