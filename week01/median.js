// Test prompt (7 minutes to complete):
// The median of a list of numbers is essentially its middle element after sorting. The same number of elements occur after it as before. Given a list of numbers with an odd number of elements, find the median?
// Example:
// arr= [5, 3, 1, 2, 4]
// The sorted array = [1,2,3,4,5]. The middle element and the median is 3 .

function findMedian(arr) {
  let sortedArr=arr.sort(function (a, b) {  return a - b;  });
  let position = Math.floor(arr.length/2);
  return sortedArr[position];
}

//thrown off by the sorting...forgot .sort() does it "alphabetically" from the first digit.