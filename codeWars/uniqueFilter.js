// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
  const combo= s1+s2;
  let answer= ""
  for (let i= 0; i <combo.length; i++)
 		if ( answer.includes(combo[i])==false){
    	answer +=combo[i]
    }
  return answer.split("").sort().join("")
}

// alt solution:
// function longest(s1, s2){
//   const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')
// }
