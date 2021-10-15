const { NotImplementedError } = require('../extensions/index.js');

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
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

module.exports = function removeKFromList(l, k) {
  let listNode = l;

  if (l.value === k) {
    l = l.next;
  }

  while (listNode.next !== null) {
    if (listNode.next.value === k) {
      listNode.next = listNode.next.next;
    }
    listNode = listNode.next;
    listNode.next = listNode.next;
  }
  return l;
}
