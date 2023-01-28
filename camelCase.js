
// prompt:
// Camel Case is a naming style common in many programming languages. In Java, method and variable names typically start with a lowercase letter, with all subsequent words starting with a capital letter (example: startThread). Names of classes follow the same pattern, except that they start with a capital letter (example: BlueCar).

// Your task is to write a program that creates or splits Camel Case variable, method, and class names.

// Input Format

// Each line of the input file will begin with an operation (S or C) followed by a semi-colon followed by M, C, or V followed by a semi-colon followed by the words you'll need to operate on.
// The operation will either be S (split) or C (combine)
// M indicates method, C indicates class, and V indicates variable
// In the case of a split operation, the words will be a camel case method, class or variable name that you need to split into a space-delimited list of words starting with a lowercase letter.
// In the case of a combine operation, the words will be a space-delimited list of words starting with lowercase letters that you need to combine into the appropriate camel case String. Methods should end with an empty set of parentheses to differentiate them from variable names.
// Output Format

// For each input line, your program should print either the space-delimited list of words (in the case of a split operation) or the appropriate camel case string (in the case of a combine operation).

function processData(input) {
  const arrayOfInputs=input.split(/\r?\n|\r|\n/g);
  arrayOfInputs.forEach(e=>{
      let strArray= e.slice(4,).split(''); 
      // I divided this problem into two halves- solving for "splitting" and then dealing with "combine". 
      // started with splitting.
      if (e[0]==="S"){
          let splitAnswer = "";
          strArray.forEach(i=>{
            if(i.match(/[A-Z]/)){
                splitAnswer = splitAnswer +" "+ i.toLowerCase();
            } else {
                splitAnswer=splitAnswer + i;
            };
          })
          splitAnswer = splitAnswer.replace("()","").trim();
          console.log(splitAnswer)
          } else {
            //this handles the core part of the combine cases.
            //different than how I handled the split section- this splits it into words, not individual characters.
            let answerArray = e.slice(4,).split(" ");
            let comboAnswer = "";
            answerArray.forEach(j=>{
              comboAnswer= comboAnswer + j[0].toUpperCase() + j.slice(1,);
            });
                // once the core answer was established, adjusted it with these nested conditionals.
                if(e[2]==="M"){
                    console.log(comboAnswer[0].toLowerCase()+ comboAnswer.slice(1,)+ "()");
                } else if (e[2] === "C"){
                    console.log(comboAnswer)  
                } else {
                    console.log(comboAnswer[0].toLowerCase()+ comboAnswer.slice(1,))
                }
          }    
  });
};

// alternate solution: (although I like mine better)
// function processData(input) {
//   //Enter your code here
//   let spiltSemi = input.split("\r\n");
//   spiltSemi.forEach((res) => {
//       let value = res.split(";");
//       let data = value[2]        
//       if(value[0] == "S"){
//           if(value[1] === "M") {
//               let str = "";   
//               for(let i=0; i<data.length; i++){
//                   if((data[i] === data[i].toUpperCase()) && !["(", ")"].includes(data[i])) 
//                       str += " " + data[i].toLowerCase()
//                   else if(!["(", ")"].includes(data[i]))
//                       str += data[i];
//               }
//               console.log(str);
//           } else if(["C", "V"].includes(value[1])) {
//               let str = "";
//               for(let i=0; i<data.length; i++){
//                   if(data[i] === data[i].toUpperCase()){
//                       str += " " + data[i].toLowerCase();
//                   } else {
//                       str += data[i];
//                   }
//               }
//               console.log(str.trimStart());
//           }
//       }
//       else if(value[0] == "C") {
//           if(["M","V"].includes(value[1])) {
//               let str = "";
//               for(let i=0; i<data.length; i++){
//                   if(data[i-1] === " "){
//                       str += data[i].toUpperCase();
//                   }
//                   else if(data[i] !== " ") {
//                       str += data[i];
//                   }
//               }
//               console.log(value[1] == "M"? str+"()": str);
//           } else if(["C"].includes(value[1])) {
//               let str = data[0].toUpperCase();
//               for(let i=1; i<data.length; i++){
//                   if(data[i - 1] === " "){
//                       str += data[i].toUpperCase();
//                   } else if(data[i] !== " ") {
//                       str += data[i];
//                   }
//               }
//               console.log(str.trimStart());
//           } 
//       }
//   });
// }

