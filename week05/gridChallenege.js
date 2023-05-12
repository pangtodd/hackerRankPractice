// prompt:
// Given a square grid of characters in the range ascii[a-z], rearrange elements of each row alphabetically, ascending. Determine if the columns are also in ascending alphabetical order, top to bottom. Return YES if they are or NO if they are not.

function gridChallenge(grid) {
  let answer = "";
  for(let i=0; i<grid.length; i++){
      let sorted = grid[i].split("").sort();
      answer+=sorted[0]
  }
  console.log("answer: "+answer)
  console.log("sorted answer: "+ answer.split("").sort().join(''))
  if (answer.split("").sort().join('') === answer){
      return "YES"
  } else {
      return "NO"
  }
}

// alt solution:

// function gridChallenge(grid) {
//     var newArray = [];
//     for(var i in grid){
//         //convert each string to array
//         var temp = Array.from(grid[i]);
//         //sort the array
//         temp.sort();
//         //create list of sorted arrays
//         newArray.push(temp);
//     }
//     var okay = true;
//     //check each column
//     for(var i=0;i<grid.length;i++){
//         for(var j=0;j<grid.length-1;j++){
//             if(newArray[j][i]>newArray[j+1][i]){
//                 okay = false;
//                 break;
//             }
//         }
//     }
//     if(okay==true){
//         return 'YES';
//     }else{
//         return 'NO';
//     }
// }