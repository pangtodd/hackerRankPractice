// promp
// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.
// Graph- a square with a red arc, which is 1/4 of a circle, starting at the bottom left corner to the top right corner.
// Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)

function squareArea(A){
  return Math.pow(A*4/(2*Math.PI), 2)
} 

// alt solution:
// function squareArea(A){
//   var circum = 4 * A;
//   var radius = circum / (2 * Math.PI);
//   var area = Math.pow(radius, 2);
//   return Math.round(area*100)/100
// }