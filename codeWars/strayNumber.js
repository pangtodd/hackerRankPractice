// prompt:
// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// Examples
// [1, 1, 2] ==> 2
// [17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {
  let same = []
  let different = []
  for (let i=0; i<numbers.length; i++){
    numbers[i] == numbers[0]? same.push(numbers[i]): different.push(numbers[i]);
  }
  return different.length<same.length? different[0]: same[0]
}