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
function removeKFromList(l, k) {

  //Version 1

  if (!l) {
    return null;
  }

  let current = l;
  while (current.value === k) {
    current = current.next;
  }
  l = current;
  let prev = l;
  current = prev.next;

  while (current) {
    while (current && current.value !== k) {
      prev = current;
      current = current.next;
    }
    while (current && current.value === k) {
      current = current.next;
    }
    prev.next = current;
  }

  return l;

  //Version 2
  
  // if (!l) {
  //   return null;
  // }
  // let newL;
  // let current = l;
  // let copy;
  // while(current) {
  //   if (current.value !== k) {
  //     if (!newL) {
  //       newL = new ListNode(current.value);
  //       copy = newL;
  //     } else {
  //       copy.next = new ListNode(current.value);
  //       copy = copy.next;
  //     }
  //   }
  //   current = current.next;
  // }
  // return newL;
}

module.exports = {
  removeKFromList
};
