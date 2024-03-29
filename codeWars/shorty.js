// prompt:
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
  return s.split(" ").map(x=> x = x.length).sort((a,b)=>a-b)[0]
}

// alt solution:
// function findShort(s){
//   return Math.min(...s.split(" ").map (s => s.length));
// }