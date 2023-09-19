// prompt:
// 20. Valid Parentheses
// Easy
// 22K
// 1.5K
// Companies

// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

//     Open brackets must be closed by the same type of brackets.
//     Open brackets must be closed in the correct order.
//     Every close bracket has a corresponding open bracket of the same type.

 

// Example 1:

// Input: s = "()"
// Output: true

// Example 2:

// Input: s = "()[]{}"
// Output: true

// Example 3:

// Input: s = "(]"
// Output: false

 

// Constraints:

//     1 <= s.length <= 104
//     s consists of parentheses only '()[]{}'.

var isValid = function(s) {
  if (s.length%2!=0)return false;
  const pair ={
      "(":")",
      "[":"]",
      "{":"}"
  }
  let modS= s
  for(let i=0;i<s.length;i++){
      console.log("Answer Pre:" +modS)
      console.log(modS.lastIndexOf(pair[s[i]]))
      let match = modS.lastIndexOf(pair[s[i]]);
      if (match>-1){
         modS = modS.slice(1,match)+ modS.slice(match+1)
         console.log("Answer Post: "+modS)
      }
  }
  return modS.length == 0
};

console.log(isValid("()[]{}"))