// A numeric string, s, is beautiful if it can be split into a sequence of two or more positive integers,a[1], a[2],...a[n], satisfying the following conditions:

// 1. a[i]- a[i-1] = 1for any l<i<n (i.e., each element in the sequence is 1 more than the previous element).
// 2. No a[i] contains a leading zero. For example, we can split s=10203 into the sequence {1, 02, 03}, but it is not beautiful because 02 and 03 have leading zeroes.
// // 3. The contents of the sequence cannot be rearranged. For example, we can split s=312 into the sequence (3, 1, 2) , but it is not beautiful because it breaks our first constraint (i.e., 1-3 is not euqal 1).


// // Perform q queries where each query consists of some integer string s. For each query, print whether or not the string is beautiful on a new line. If it is beautiful, print YES x, where x is the first number of the increasing sequence. If there are multiple such values of x, choose the smallest. Otherwise, print NO.

function separateNumbers(s) {
  let sString=s.toString();
  let maybeArray=[];
  for(let i=0; i<s.length; i++){
      let currentNo = parseInt(sString.slice(0,i+1));
      let chopped = sString.slice(i+1,);
      if (chopped.indexOf(currentNo+1)===0){
          maybeArray.push(currentNo, currentNo+1)
          sString = sString.slice(currentNo.toString().length+(currentNo+1).toString().length)
      } 
  }
  if(maybeArray[0]===undefined){
      console.log("NO")
  } else{
      let currentNum= maybeArray[maybeArray.length-1];
      while(sString.length>0){
          if(sString.indexOf(currentNum+1)===0){
             maybeArray.push(currentNum +1);
             sString=sString.slice((currentNum+1).toString().length);
             currentNum=(currentNum+1);
          } else {
              sString=sString.slice((currentNum+1).toString().length);
          }
      }
      if (maybeArray.toString().replaceAll(",","")===s.toString()){
          console.log("YES "+maybeArray[0]);
      } else {
          console.log("NO");
      }
  }     
}