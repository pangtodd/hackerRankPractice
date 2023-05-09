// prompt
// Use the counting sort to order a list of strings associated with integers. If two strings are associated with the same integer, they must be printed in their original order, i.e. your sorting algorithm should be stable. There is one other twist: strings in the first half of the array are to be replaced with the character - (dash, ascii 45 decimal).

// Insertion Sort and the simple version of Quicksort are stable, but the faster in-place version of Quicksort is not since it scrambles around elements while sorting.

// Design your counting sort to be stable.

  // function countSort(arr) {
  //   for (let i = 0; i<arr.length/2; i++){
  //       arr[i][1]="-"
  //   }
    
  //   const max = Math.max(...arr.map((item) => item[0]));
  //   const freq = Array(max + 1).fill(0);

  //   for (let i = 0; i < arr.length; i++) {
  //       freq[arr[i][0]]++;
  //   }

  //   for (let i = 1; i < freq.length; i++) {
  //       freq[i] += freq[i - 1];
  //     }

  // const answer = Array(arr.length);
  // for (let i = arr.length - 1; i >= 0; i--) {
  //   const value = arr[i][0];
  //   const index = freq[value] - 1;
  //   answer[index] = arr[i];
  //   freq[value]--;
  // }

  //   let stringAnswer=""
  //   for (let i=0; i<answer.length; i++){
  //       stringAnswer += answer[i][1] + " "
  //   }
  // console.log(stringAnswer);
  // }

  function countSort(arr) {
    for(let i = 0; i < arr.length / 2; i++){
        arr[i][1] = '-';
    }  
      
    const sorted = arr.sort((a, b) => a[0] - b[0]);
    
    let answer = "";
    for(let i=0; i<sorted.length; i++){
        answer+=sorted[i][1] + " "
    }
    
    console.log(answer)
}

// alt solution:
// function countSort(arr) {
//   const countingArr = Array.from(Array(100), () => new Array());
//   let middle = arr.length / 2;
  
//   for (let element of arr) {
//       const [index, str] = element;
      
//       if (middle > 0) {
//           countingArr[index].push('-');
//           middle -= 1;
//       } else {
//           countingArr[index].push(str);
//       }
//   }
  
//   console.log(countingArr.flat().join(' '));
// }