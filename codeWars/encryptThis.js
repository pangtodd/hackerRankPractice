// prompt:
// Acknowledgments:
// I thank yvonne-liu for the idea and for the example tests :)

// Description:
// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.
// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"

let encryptThis = function(text){
  let answer = []
  if (text.length < 2) return text.charCodeAt(0).toString()
  let textArr = text.split(" ")
  for (let i = 0; i < textArr.length; i++) {
    let element = textArr[i]
    if (element.length < 2) {
      answer.push(element[0].charCodeAt(0))
    } else {
      let holder = textArr[i][textArr[i].length - 1]
      element = element.slice(0, element.length - 1) + textArr[i][1]
      element = element[0] + holder + element.slice(2, )
      element = textArr[i][0].charCodeAt(0).toString() + element.slice(1, )
      answer.push(element)
    }

  }
  return answer.join(" ")
}
