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

// var isValid = function(s) {
//   if (s.length%2!=0)return false;
//   const pair ={
//       "(":")",
//       "[":"]",
//       "{":"}"
//   }
//   let modS= s
//   for(let i=0;i<s.length;i++){
//       console.log("Answer Pre:" +modS)
//       console.log(modS.lastIndexOf(pair[s[i]]))
//       let match = modS.lastIndexOf(pair[s[i]]);
//       if (match>-1){
//          modS = modS.slice(1,match)+ modS.slice(match+1)
//          console.log("Answer Post: "+modS)
//       }
//   }
//   return modS.length == 0
// };

var isValid = function(s) {
  if (s.length % 2 != 0) return false;
	while (s.includes("()") || s.includes("[]") || s.includes("{}")){
  	s = s.replaceAll("{}","")
    s = s.replaceAll("[]", "")
    s = s.replaceAll("()", "")
  }
  return s.length==0
};

// Same thing, but using Reg Ex:
// var isValid = function(s) {
//   if (s.length % 2 !== 0) return false;
//   const pairRegex = /\(\)|\[\]|\{\}/g;
//   while (s.match(pairRegex)) {
//     s = s.replace(pairRegex, "");
//   }
//   return s.length === 0;
// };

alt solution:
const pairs = {
  "(": ")",
  "[": "]",
  "{": "}"
}
   
// var isValid = function(s) {
  
//   // check if length is an odd number. if it is, return false
//   // if there is an odd number, it means that at least one bracket is missing a pair
//   if (s.length % 2 === 1) return false
//   if (s[0] === "]" || s[0] === ")" || s[0] === "}") return false
//   if (s[s.length - 1] === "[" || s[s.length - 1] === "(" || s[s.length - 1] === "{") return false
  
//   let stack = []
  
//   for(let i=0; i<s.length; i++) {
//       if(s[i] === "[" || s[i] === "(" || s[i] === "{") {
//           stack.push(s[i])
//       } else if (pairs[stack.pop()] !== s[i]) {
//           return false
//       }
      
//   }
//   return stack.length === 0
  
// };

