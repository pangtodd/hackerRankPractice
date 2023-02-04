//prompt:
// You will be given a list of 32 bit unsigned integers. Flip all the bits ( 1 and 0) and return the result as an unsigned integer.

// Example
// n = 1
//  9 We're working with 32 bits, so:
// 00000000000000000000000000000001 = 1
// 11111111111111111111111111111110 = 4294967294

function flippingBits(n) {
  let binaryString = n.toString(2).padStart(32, "0")
  let zeroToPlaceholder= binaryString.replaceAll("0", "Z");
  let oneToZero= zeroToPlaceholder.replaceAll("1", "0")
  let answer= parseInt((oneToZero.replaceAll("Z", "1")),2);
  return answer;
}