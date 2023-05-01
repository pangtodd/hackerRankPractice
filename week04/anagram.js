prompt:
2 words ar anagrams of one another if there letters can be rearranged to form the other word. Given the String, split it into two contiguous substrings of equal length. Determine the minimum number of characters to change to make the two substrings into anagrams of one another.

example: s = abccde
splits into "abc" and "cde"
2 changes are required.

function anagram(s) {
  let inCommon = 0;
  if (s.length % 2 > 0) {
    return -1
  } else {
    const subStringA = s.slice(0, s.length / 2);
    let subStringB = s.slice(s.length / 2, );
    for (let i = 0; i < s.length / 2; i++) {
      if (subStringB.includes(subStringA[i])) {
        inCommon = inCommon + 1;
        subStringB = subStringB.replace(subStringA[i], "")
      }
    }
    return s.length / 2 - inCommon
  }
}

// alt solution:

// function anagram(s) {
//   const map = new Map()
//   const mid = s.length / 2
//   const firstHalf = s.slice(0,mid)
//   const secondHalf = s.slice(mid)
//   let count = 0;
  
//   if(firstHalf.length !== secondHalf.length) {
//       return -1
//   }
//   for(let char of secondHalf) {
//       map.set(char, map.get(char) + 1 || 1)
//   }
//   for(let char of firstHalf) {
//       if(map.get(char) > 0) {
//           map.set(char, map.get(char) - 1)
//       } else {
//           count++
//       }
//   }
  
//   return count;
// }
