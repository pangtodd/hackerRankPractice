// prompt:
// Sean invented a game involving 2n x 2n a matrix where each cell of the matrix contains an integer. He can reverse any of its rows or columns any number of times. The goal of the game is to maximize the sum of the elements in the

// n x n submatrix located in the upper-left quadrant of the matrix.

// Given the initial configurations for
// matrices, help Sean reverse the rows and columns of each matrix in the best possible way so that the sum of the elements in the matrix's upper-left quadrant is maximal. 

function flippingMatrix(matrix) {
  // Write your code here
const rowOne=matrix[0];
const rowTwo = matrix[1];
const secondToLastRow= matrix[matrix.length-2]
const lastRow= matrix[matrix.length-1]

let topLeft= 0;
let topRight = 0;
let bottomRight = 0;
let bottomLeft = 0;
let placeHolder= 0;  

// topLeft score
if (rowOne[0]>rowOne[matrix.length-1]){
    topLeft = rowOne[0]
} else {
    topLeft = rowOne[matrix.length-1]
}

if (lastRow[0]>lastRow[matrix.length-1]){
    placeHolder= lastRow[0]
} else {
    placeHolder = lastRow[matrix.length -1]
}

if (placeHolder>topLeft){
    topLeft= placeHolder;
  }

// bottomLeft score
if (rowTwo[0]>rowTwo[matrix.length-1]){
    bottomLeft = rowTwo[0]
  } else {
    bottomLeft = rowTwo[matrix.length-1]
}

if (secondToLastRow[0]>secondToLastRow[matrix.length-1]){
    placeHolder = secondToLastRow[0]
  } else {
    placeHolder = secondToLastRow[matrix.length -1]
}

if (placeHolder>bottomLeft){
    bottomLeft=placeHolder;
  }

// topRight Score
if (rowOne[1]>rowOne[matrix.length-2]){
  topRight = rowOne[1]
} else {
  topRight = rowOne[matrix.length-2]
};
if (lastRow[1]>lastRow[matrix.length-2]){
  placeHolder= lastRow[1]
  } else {
  placeHolder = lastRow[matrix.length -2]
}

if (placeHolder>topRight){
  topRight= placeHolder;
}

// bottomRightscore
if (rowTwo[1]>rowTwo[matrix.length-2]){
  bottomRight = rowTwo[1]
} else {
  bottomRight = rowTwo[matrix.length-2]
}

if (secondToLastRow[0]>secondToLastRow[matrix.length-2]){
  placeHolder = secondToLastRow[0]
} else {
  placeHolder = secondToLastRow[matrix.length -2]
}

if (placeHolder>bottomRight){
  bottomRight=placeHolder;
  placeHolder=0;
} else {
  placeHolder = 0;
}

console.log( topLeft, topRight, bottomLeft, bottomRight)
return ( topLeft + topRight + bottomLeft + bottomRight)

}
