// prompt:
// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

function sortByLength (array) {
  return array.sort((a,b)=>a.length-b.length)
};

function compareNumeric(a, b) {
	if (a < b) return -1;
	if (a > b) return 1;
}

// function sortByLength (array) {
// 	let arrayL = array.map((value) => {
// 		return value.length;
// 	})
// 	arrayL = arrayL.sort(compareNumeric);
// 	let resArr = arrayL.map((value) => {
// 		for (let i = 0; i < array.length; i++) {
// 			if (array[i].length === value) {
// 				return array[i];
// 			}
// 		}
// 	})
// 	return resArr;
// };