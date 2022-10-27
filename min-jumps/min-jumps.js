"use strict";

// 1. start at beginning of array
// 2. loop through possible number of jumps allowed in that space
// 3. for each jump length, recursively pass in the array of the spot you would land on
// 4. track total distance, base case is when you pass the end length of the array

// Complete this algo
const minJumps = (arr) => {
  const jumpRange = arr[0];
  let numJumps = [];
  for (let i = 1; i < jumpRange + 1; i++) {
    if (i >= arr.length - 1) {
      numJumps.push(0);
    } else {
      numJumps.push(minJumps([...arr.slice(i)]));
    }
  }
  return 1 + Math.min(...numJumps);
};

module.exports = minJumps;
