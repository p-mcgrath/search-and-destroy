"use strict";

// Complete this algo
const binarySearch = (array, target, start = 0, end = array.length - 1) => {
  // 0. base case: indicies are next to eachother (ie no midpoint) -> return false
  // 1. find midpoint index value
  // 2. compare midpoint array value to target (lower than, equal to, or higher than)
  // 3. if equal to, return true
  //   if lower than, take lower half of the array and enter into the function recursively
  //  same for higher than but opposite

  //   if (!end) {
  // 	end = array.length -1
  //   }
  if (array[start] === array[end]) {
    if (array[start] === target) {
      return true;
    } else {
      return false;
    }
  }
  const midIndex = Math.floor((start + end) / 2);
  //console.log(start, midIndex, end);
  if (array[midIndex] === target) {
    return true;
  } else if (array[midIndex] > target) {
    return binarySearch(array, target, start, midIndex);
  } else {
    return binarySearch(array, target, midIndex + 1, end);
  }
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
