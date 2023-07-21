// DESCRIPTION:
// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// For example, the score of abad is 8 (1 + 2 + 1 + 4).

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x){
  const alpha = "abcdefghijklmnopqrstuvwxyz ";
  let bobby = x
  for(let i =0; i<x.length; i++){
    if (bobby.includes(x[i])) {
        bobby=bobby.replaceAll(x[i], alpha.indexOf(x[i])+1+",")
  }
  }
  const words= bobby.split(27)
 /*  console.log( words[0].split(",").map(e=>parseInt(e)).filter(e=> e > 0).reduce((a,b)=>a+b)); */
  let highScore= 0;
  let highPos = 0;
  for (let j = 0; j<words.length; j++){
  	let jScore = words[j].split(",").map(e=>parseInt(e)).filter(e=> e > 0).reduce((a,b)=>a+b)
    if (jScore>highScore){
    	highScore = jScore;
      highPos= j
    }
  }
  return x.split(" ")[highPos]
}

// alt solution:

// function high(s){
//   let as = s.split(' ').map(s=>[...s].reduce((a,b)=>a+b.charCodeAt(0)-96,0));
//   return s.split(' ')[as.indexOf(Math.max(...as))];
// }



