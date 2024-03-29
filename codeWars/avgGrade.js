// prompt:
// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

function betterThanAverage(classPoints, yourPoints) {
  return classPoints.reduce((a,b)=>a+b)/classPoints.length > yourPoints? false : true
}

// alt solution:
// function betterThanAverage(classPoints, yourPoints) {
//   var sum = 0;
//   for (var i = 0; i < classPoints.length; i++){
//   	sum += classPoints[i];
//   }
//   	sum = sum/classPoints.length
//   if(sum > yourPoints) {
//   	return false
//   } else {
//   	return true
//   } 
// }
