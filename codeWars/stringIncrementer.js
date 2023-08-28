// prompt:
// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString(strng){
  let endNum = "";
  for (let i=strng.length-1; i>=0; i--){
      let backend = strng.slice(i,)
      if (backend >=0) endNum = backend
  }
  if (endNum.length <= 0) return strng+1;
  const start = strng.slice(0, strng.length-endNum.length);
  const middle = endNumPlus.toString().length>=endNum.length?
  	""
    :
    "0".repeat(endNum.length - endNumPlus.toString().length)
  const endNumPlus = +endNum+1;
  return start+middle+endNumPlus
}