"use strict";

//Complete this algo
const isLoop = (linkedlist) => {
  //1. while loop
  //2. first runner travels n nodes
  //3. 2nd runner travels 2n nodes
  //4. compare values, if same return value
  //5. if not same increment n
  let runner1;
  let runner2;
  let n = 0;

  if (linkedlist.tail.next !== null) {
    return true;
  }
  let current = linkedlist.head;
  while (current.next !== null) {
    try {
      runner1 = linkedlist.getNthNode(n + 1);

      runner2 = linkedlist.getNthNode(n * 2 + 2);

      console.log(n, runner1, runner2);
      if (runner1 === runner2) {
        console.log("hit if");
        return true;
      }

      n++;
      current = current.next;
    } catch (e) {
      return false;
    }
  }

  return false;
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop;
