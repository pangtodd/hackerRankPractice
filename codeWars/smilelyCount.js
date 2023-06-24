// Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

// Rules for a smiling face:

// Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
// A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
// Every smiling face must have a smiling mouth that should be marked with either ) or D
// No additional characters are allowed except for those mentioned.

// Valid smiley face examples: :) :D ;-D :~)
// Invalid smiley faces: ;( :> :} :]

// Example
// countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
// countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
// countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
// Note
// In case of an empty array return 0. You will not be tested with invalid input (input will always be an array). Order of the face (eyes, nose, mouth) elements will always be the same.

function countSmileys(arr) {
  let score = 0;
  const eyes = ":;"
  const nose = "-~"
  const mouth = "D)"
  for (let i = 0; i < arr.length; i++) {
  	let smile = "";
    let thisSmile = arr[i];
    smile += eyes.includes(thisSmile[0]) ? "t":"f";
    smile += mouth.includes(thisSmile[thisSmile.length-1])? "t": "f"
   	if(arr[i].length>2){
    	smile += nose.includes(thisSmile[1])? "t":"f"
    }
    smile += arr[i].length>3? "f":"t"
    score += smile.includes("f") ? 0 : 1
  }
  return score;
}

// alt solution:
// const countSmileys = ss => ss.reduce((a, s) => a + /^[:;][-~]?[D)]$/.test(s), 0);
