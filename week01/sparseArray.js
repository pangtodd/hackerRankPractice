// prompt:
// There is a collection of input strings and a collection of query strings. For each query string, determine how many times it occurs in the list of input strings. Return an array of the results.

// Example
// strings = ["ab", 'ab', 'abc'];
// queries = ["ab", 'ab', 'abc']


// There are 2 instances of 'ab', 1 of 'abc' and 0 of 'bc'. For each query, add an element to the return array, results = [2, 1, 0].

function matchingStrings(strings, queries) {
  let answer= [];
  let score = 0;
  for (let i = 0; i<queries.length; i++) {
      score = 0;
      for (let j = 0; j<strings.length; j++) {
          if (queries[i] === strings[j]){
              score++;
          }
     }
      answer.push(score);
  }
  return answer;
}

// alternate solution:
// function matchingStrings(strings, queries) {
//   return queries.map(q => {
//       return strings.filter(s => s == q).length
//   })
// }