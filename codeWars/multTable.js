// prompt:
// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:

// [[1,2,3],[2,4,6],[3,6,9]]

multiplicationTable = function(size) {
  let multTable=[]
  let uno=[]
  for(let i=1; i<=size;i++){
    uno.push(i)
  }
  for(let j=0; j<uno.length; j++){
    multTable.push(uno.map((e)=>e*uno[j]))
  }
  return multTable
}

