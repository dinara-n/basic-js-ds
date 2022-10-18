const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.tree = null;
  }

  root() {
    return this.tree;
  }

  add(data) {
    this.tree = addNode(this.tree, data);

    function addNode(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data > data) {
        node.left = addNode(node.left, data);
      }
      if (node.data < data) {
        node.right = addNode(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return this.find(data) ? true : false;
    
    // return hasNode(this.tree, data);

    // function hasNode(node, data) {
    //   if (!node) {
    //     return false;
    //   }
    //   if (node.data > data) {
    //     return hasNode(node.left, data);
    //   }
    //   if (node.data < data) {
    //     return hasNode(node.right, data);
    //   }
    //   return true;
    // }
  }

  find(data) {
    return findNode(this.tree, data);

    function findNode(node, data) {
      if (!node) {
        return null;
      }
      if (node.data > data) {
        return findNode(node.left, data);
      }
      if (node.data < data) {
        return findNode(node.right, data);
      }
      return node;
    }
  }

  remove(data) {
    this.tree = removeNode(this.tree, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }
      if (node.data > data) {
        node.left = removeNode(node.left, data);
        return node;
      }
      if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      }

      if (!node.left && !node.right) {
        return null;
      }
      if (!node.left) {
        return node.right;
      }
      if (!node.right) {
        return node.left;
      }

      let maxLeft = node.left;
      while (maxLeft.right) {
        maxLeft = maxLeft.right;
      }
      node.data = maxLeft.data;
      maxLeft = removeNode(maxLeft, maxLeft.data);
      return node;
    }
  }

  min() {
    return minData(this.tree);

    function minData(node) {
      if (!node) {
        return null;
      }
      if (!node.left) {
        return node.data;
      }
      return minData(node.left);
    }
  }

  max() {
    return maxData(this.tree);

    function maxData(node) {
      if (!node) {
        return null;
      }
      if (!node.right) {
        return node.data;
      }
      return maxData(node.right);
    }
  }
}

module.exports = {
  BinarySearchTree
};