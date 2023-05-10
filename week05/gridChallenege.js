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