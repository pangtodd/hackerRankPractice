// prompt
// Use the counting sort to order a list of strings associated with integers. If two strings are associated with the same integer, they must be printed in their original order, i.e. your sorting algorithm should be stable. There is one other twist: strings in the first half of the array are to be replaced with the character - (dash, ascii 45 decimal).

// Insertion Sort and the simple version of Quicksort are stable, but the faster in-place version of Quicksort is not since it scrambles around elements while sorting.

// Design your counting sort to be stable.

function countSort(arr) {
  const max = Math.max(...arr.map((item) => item[0]));

  const freq = Array(max + 1).fill(0);

  for (let i = 0; i < arr.length; i++) {
    freq[arr[i][0]]++;
  }

  for (let i = 1; i < freq.length; i++) {
    freq[i] += freq[i - 1];
  }

  
  const answer = Array(arr.length);
  for (let i = arr.length - 1; i >= 0; i--) {
    const value = arr[i][0];
    const index = freq[value] - 1;
    answer[index] = arr[i];
    freq[value]--;
  }

  return answer;
}