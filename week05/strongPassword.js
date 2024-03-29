// prompt:
// Louise joined a social networking site to stay in touch with her friends. The signup page required her to input a name and a password. However, the password must be strong. The website considers a password to be strong if it satisfies the following criteria:

// Its length is at least 6.
// It contains at least one digit.
// It contains at least one lowercase English character.
// It contains at least one uppercase English character.
// It contains at least one special character. The special characters are: !@#$%^&*()-+
// She typed a random string of length  in the password field but wasn't sure if it was strong. Given the string she typed, can you find the minimum number of characters she must add to make her password strong?

function minimumNumber(n, password) {
    let numbers = "0123456789";
    let lower_case = "abcdefghijklmnopqrstuvwxyz";
    let upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let special_characters = "!@#$%^&*()-+";
    let score = 4;
    for (let i = 0; i<password.length; i++){
        if(numbers.includes(password[i])){
            score --;
            numbers = "";
        } else if (lower_case.includes(password[i])){
            score --;
            lower_case= "";
        } else if (upper_case.includes(password[i])){
            score --;
            upper_case= ""; 
        } else if (special_characters.includes(password[i])){
            score --;
            special_characters= ""; 
        }
    }
    if(score+password.length>=6){
        return score;
    } else {
        return 6-password.length
    }  
}

// alt solution:
// function minimumNumber(n, password) {
//   let numberAdd = 0;
//   let lowerCase   = /[a-z]/;
//   let upperCase   = /[A-Z]/;
//   let digit       = /[0-9]/;
//   let characters  = /[!@#$%^&*()+-]/;

//   if (!digit.test(password)) {
//       password = password.concat('1');
//       numberAdd++;
//   };
//   if (!lowerCase.test(password)) {
//       password = password.concat('a');
//       numberAdd++;
//   };    
//   if (!upperCase.test(password)) {
//       password = password.concat('A');
//       numberAdd++;
//   };    
//   if (!characters.test(password)) {
//       password = password.concat('!');
//       numberAdd++;
//   };    
//   if (password.length < 6) {
//       let add = 6 - password.length;
//       numberAdd += add;
//   }
//   return numberAdd;
// }