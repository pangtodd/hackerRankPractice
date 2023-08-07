// prompt:
// A driver is driving on the freeway. The check engine light of his vehicle is on, and the driver wants to get service immediately. Luckily, a service lane runs parallel to the highway. It varies in width along its length.

// You will be given an array of widths at points along the road (indices), then a list of the indices of entry and exit points. Considering each entry and exit point pair, calculate the maximum size vehicle that can travel that segment of the service lane safely.

// Example
// n=4
// width = [2, 3, 2, 1]
// cases = [[1,2],[2,4]]


// If the entry index, i =1 and the exit, j=2 , there are two segment widths of 2 and 3 respectively. The widest vehicle that can fit through both is 2. If i=2 and j=4, the widths are  which limits vehicle width to 1 .

function serviceLane(width, cases) {
  let answer= [];
  for(let i =0; i < cases.length; i++){
      let range = width.slice(cases[i][0], cases[i][1]+1)
      answer.push(Math.min(...range))
  }
  return answer
}