// prompt:
// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

// Examples:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.

function encrypt(text, n) {
  if (!text || n <= 0) return text; 
  let answer = text
  for (let i = 0; i < n; i++) {
    let odd = ""
    let even = ""
    let cycle = text? text.length: 0
    for (let j = 0; j < cycle; j++) {
      j % 2 == 0 ? even += answer[j] : odd += answer[j]
    }
    answer = odd.concat(even)
  }
  console.log(answer)
  return answer
}

function decrypt(text, n) {
  if (!text || n <= 0) return text;
  let answer = text;
  for (let i = 0; i < n; i++) {
    let mid = Math.floor(answer.length / 2);
    let odd = answer.slice(0, mid);
    let even = answer.slice(mid, text.length);
    let iAnswer = "";
    for (let j = 0; j < even.length; j++) {
      iAnswer += odd[j] ? even[j] + odd[j] : even[j];
    }
    answer = iAnswer;
  }
  console.log("decrypt answer: " + answer);
  return answer;
}