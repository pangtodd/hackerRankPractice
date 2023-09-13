// prompt:
// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway

function noBoringZeros(n) {
  let stringArr = n.toString().split("");
  while (stringArr[stringArr.length-1]=="0"){
    let oops = stringArr.pop()
  }
  return +stringArr.join("")
}