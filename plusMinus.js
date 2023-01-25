
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

