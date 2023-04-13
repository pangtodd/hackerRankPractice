// prompt:
// Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

function caesarCipher(s, k) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const key = alphabet.substring(k)+alphabet.slice(0,k)
  const upperCaseKey= key.toUpperCase();
  let answer = "";
  for(let i=0; i<s.length; i++){
      let position = alphabet.indexOf(s[i].toLowerCase());
      if(key.includes(s[i])){
          answer = answer + key[position];          
      }else if (upperCaseKey.includes(s[i])){
          answer = answer + upperCaseKey[position];
      } else {
          answer = answer + s[i];
      }
  }
  return answer;
}
