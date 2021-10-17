const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
   constructor() {
     this.rootNum = null;
   }

  root() {
    return this.rootNum;
  }

  add(data) {
    this.rootNum = addNode(this.rootNum, data);

    function addNode(nodeNum, data) {
      if(!nodeNum) return new Node(data);

      if(data === nodeNum.data) return nodeNum;

      if(data < nodeNum.data) nodeNum.left = addNode(nodeNum.left, data);

      else nodeNum.right = addNode(nodeNum.right, data);

      return nodeNum;
    }
  }

  has(data) {
    return search(this.rootNum, data);

    function search(nodeNum, data) {
      if(!nodeNum) return false;

      if(data === nodeNum.data) return true;

      return data < nodeNum.data ?
      search(nodeNum.left, data) :
      search(nodeNum.right, data);
    }
  }

  find(data) {
    if (!this.rootNum) return false;

    let curNum = this.rootNum;
    let foundNum = false;

    while(!foundNum && curNum) {
      if(curNum.data > data) curNum = curNum.left;

      else if (curNum.data < data) curNum = curNum.right;

      else foundNum = true;

    }
    return curNum;
  }

  remove(data) {
    this.rootNum = removeNode(this.rootNum, data);

    function removeNode(nodeNum, data) {
      if(!nodeNum) return null;

      if(data < nodeNum.data) {
        nodeNum.left = removeNode(nodeNum.left, data);
        return nodeNum;
      } else if(data > nodeNum.data) {
        nodeNum.right = removeNode(nodeNum.right, data);
          return nodeNum;
      } else {
        if(!nodeNum.left && !nodeNum.right) return null;
        
        if(!nodeNum.left) {
          nodeNum = nodeNum.right;
          return nodeNum;
        }
        if(!nodeNum.right) {
          nodeNum = nodeNum.left;
          return nodeNum;
        }
        let minRight = nodeNum.right;
        while(minRight.left) {
          minRight = minRight.left;
        }
        nodeNum.data = minRight.data;
        nodeNum.right = removeNode(nodeNum.right, minRight.data);
        return nodeNum;
      }
    }
  }

  min() {
    if(!this.rootNum) return;

    let curNode = this.rootNum;
    while(curNode.left) {
      curNode = curNode.left;
    }
    return curNode.data;
  }

  max() {
    if(!this.rootNum) return;

    let curNode = this.rootNum;
    while(curNode.right) {
      curNode = curNode.right;
    }
    return curNode.data;
  }

}
