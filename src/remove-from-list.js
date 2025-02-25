const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

//  function removeKFromList(l, k) {

//   let prev = null;

//   while(l.value !== k){
//     prev = l;
//     l = l.next;
//   }
//   if(prev === null) {
//     l = l.next;
//   } else {
//   prev.next = l.next  
//   }
//  console.log(l)
// }

function removeKFromList(l, k) {
  let arr = [];
  let node = l
  while (node !== null) {
    if (node.value !== k) {
      arr.push(node.value)
    }
    node = node.next
  }
  return arr.reverse().reduce((acc, cur) => {
    if (acc) {
      const node = new ListNode(cur);
      node.next = acc;
      return node;
    }
    return new ListNode(cur);
  }, null);

}

module.exports = {
  removeKFromList
};
