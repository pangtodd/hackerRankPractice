// prompt:
// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

function alphabetPosition(text) {
  const alpha= "abcdefghijklmnopqrstuvwxyz "
  let newText=text;
  for (let j=0; j<text.length; j++){
  	if(alpha.includes(text[j].toLowerCase()) == false){
    newText=newText.replaceAll(text[j], "")
    }
  }
  const key = alpha.trim().split("");
	for (let i = 0; i<key.length; i++){
    newText = newText.toLowerCase().replaceAll(key[i], (i+1)+",")
  }
  return newText.replaceAll(" ", "").split(",").filter(e=> parseInt(e)>= 0).join(" ")
}

// alt soltuion 1:
// function alphabetPosition(text) {
//   var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
//   return text.toLowerCase().split('')
//   .filter( letter => {
//     let index = alphabet.indexOf(letter);
//     return index > -1;
//   }  )
//   .map( letter => alphabet.indexOf(letter) + 1 )
//   .join(' ')
// }

// alt solution 2:
// function alphabetPosition(text) {
//   var result = "";
//   for (var i = 0; i < text.length; i++){
//     var code = text.toUpperCase().charCodeAt(i)
//     if (code > 64 && code < 91) result += (code - 64) + " ";
//   }

//   return result.slice(0, result.length-1);
// }