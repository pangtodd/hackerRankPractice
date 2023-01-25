
// Instructions:
// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with

// places after the decimal.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to
// are acceptable.

function plusMinus(arr) {
    let positive = [];
    let negative = [];
    let zero= [];
    
    arr.forEach(element =>{
    if (element<0){
        negative.push(element);
    } else if (element === 0){
        zero.push(element);
    } else {
        positive.push(element)
    }
    })
    
    const posRatio= positive.length/arr.length;
    const negRatio = negative.length/arr.length;
    const zeroRatio= zero.length/arr.length;
    
    console.log(posRatio.toFixed(6));
    console.log(negRatio.toFixed(6));
    console.log(zeroRatio.toFixed(6));
}

// Better solution: use forEach loop and just iterate score of each instead of using Array.length
// function plusMinus(arr: number[]): void {
//     // Write your code here
//     let positves = 0;
//     let negatives = 0;
//     let zeros = 0;
//     const total = arr.length;
    
//     arr.forEach((value) => {
//         if (value > 0) positves++;
//         else if (value < 0) negatives++;
//         else zeros++;
//     })
    
//     console.log((positves / total).toFixed(6));
//     console.log((negatives / total).toFixed(6));
//     console.log((zeros / total).toFixed(6));
// }

