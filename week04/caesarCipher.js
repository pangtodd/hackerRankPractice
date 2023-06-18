// prompt:
// Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

function caesarCipher(s, k) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const upperAlpha = alphabet.toUpperCase();
  let key = alphabet.substring(k)+alphabet.slice(0,k);
  if(k>26){
      key = alphabet.substring(k%26)+alphabet.slice(0,k%26)
      } 
  let answer = "";
  for(let i=0; i<s.length; i++){+
      let position = alphabet.indexOf(s[i].toLowerCase());
      if(key.includes(s[i])){
          answer = answer + key[position];          
      }else if (upperAlpha.includes(s[i])){
          answer = answer + key[position].toUpperCase();
      } else {
          answer = answer + s[i];
      }
  }
  return answer;
}

// alt solution:
// function caesarCipher(s, k) {
//   const isUpperCase = (string) => {
//       return string === string.toUpperCase();
//   }

//   const alp = 'abcdefghijklmnopqrstuvwxyz';
//   const ALP = alp.toUpperCase();
//   const alpLength = alp.length;
//   k = k < alpLength ? k : k % alpLength; 
  
//   s = s.split('');
//   let result = s.map((x) => {
//       let filtro;
//       isUpperCase(x) ? filtro = ALP : filtro = alp;
//       filtro = filtro.split('')
//       const index = filtro.findIndex(letra => letra === x);
//       const r = (index + k >= alpLength) 
//                   ? (index + k) - alpLength
//                   : index + k;
//       return index != -1 ? filtro[r] : x;
//   })
  
//   return result.join('');
// }