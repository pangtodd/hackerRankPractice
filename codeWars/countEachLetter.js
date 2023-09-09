// prompt:
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
  let answer = {};
  for (let i =0; i < string.length; i++){
    if (answer[string[i]]) {
        answer[string[i]] +=1 
      } else {
      answer[string[i]]=1;
    }
  }
  return answer;
}

// function count (string) {
//   return string.split('').reduce(function(counts,char){
//     counts[char] = (counts[char]||0) + 1;
//     return counts;
//   },{});
// }