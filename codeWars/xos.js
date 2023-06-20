// prompt:
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  let xs= 0;
  let os= 0;
  const lowerCaseStr= str.toLowerCase();
  for(let i=0; i<str.length; i++){
    if(lowerCaseStr[i]=="x"){
      xs+=1;
    }
    if(lowerCaseStr[i]=="o"){
      os+=1;
    }
  }
  return xs===os? true: false;  
}



