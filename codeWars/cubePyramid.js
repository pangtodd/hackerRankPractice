// prompt:
// Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of 
// �
// 3
// n 
// 3
//  , the cube above will have volume of 
// (
// �
// −
// 1
// )
// 3
// (n−1) 
// 3
//   and so on until the top which will have a volume of 
// 1
// 3
// 1 
// 3
//  .

// You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

// The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such as 
// �
// 3
// +
// (
// �
// −
// 1
// )
// 3
// +
// (
// �
// −
// 2
// )
// 3
// +
// .
// .
// .
// +
// 1
// 3
// =
// �
// n 
// 3
//  +(n−1) 
// 3
//  +(n−2) 
// 3
//  +...+1 
// 3
//  =m if such a n exists or -1 if there is no such n.

// Examples:
// findNb(1071225) --> 45

// findNb(91716553919377) --> -1

function findNb(m) {
  let currentVol= 0;
  let cubeTotal=1;
  while (currentVol<m){
    currentVol += Math.pow(cubeTotal, 3);
    cubeTotal += 1;      
  }
return currentVol === m? cubeTotal-1: -1
}

// alt solution:
// var findNb = m =>
// {
//   var n = Math.floor((4*m)**.25);
//   var sum = x => (x*(x+1)/2)**2;
//   return sum(n) == m ? n : -1;
// }