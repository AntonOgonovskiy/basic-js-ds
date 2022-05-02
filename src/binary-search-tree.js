const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.top = null;
  };

  root() {

    return this.top ? this.top : null

  };

  add(data) {
    this.top = addNew(this.top, data)

    function addNew(top, data) {
      if (top === null) {
        return new Node(data)
      }
      if (top.data === data) {
        return top
      }
      if (top.data > data) {
        top.left = addNew(top.left, data)
      } else if (top.data < data) {
        top.right = addNew(top.right, data)
      }
      return top
    }
  }

  has(data) {
    return ifHas(this.top, data)

    function ifHas(top, data) {
      if (top === null) {
        return false
      }
      if (top.data === data) {
        return true
      }
      if (top.data < data) {
        return ifHas(top.right, data)
      }
      if (top.data > data) {
        return ifHas(top.left, data)
      }
    }
  }

  find(data) {
    return elFind(this.top, data)

    function elFind(top, data) {
      if (top === null) {
        return null
      }
      if (top.data === data) {
        return top
      }
      if (top.data < data) {
        return elFind(top.right, data)
      }
      if (top.data > data) {
        return elFind(top.left, data)
      }
    }
  }

  remove(data) {
    this.top = removeEl(this.top, data);

    function removeEl(top, data) {
      if (top === null) {
        return null
      }
      if (top.data < data) {
        top.right = removeEl(top.right, data)
        return top
      }
      if (top.data > data) {
        top.left = removeEl(top.left, data)
        return top
      }
      if (top.data === data) {
        if (top.left === null && top.right === null) {
          return null
        }
        if (top.left === null) {
          top = top.right
          return top
        }
        if (top.right === null) {
          top = top.left
          return top
        }
        let newtop = top.left
        while (newtop.right) {
          newtop = newtop.right
        }
        top.data = newtop.data
        top.left = removeEl(top.left, newtop.data)
        return top
      }
    }
  }

  min() {
    if (this.top === null) {
      return null
    }
    let value = this.top;
    while (value.left) {
      value = value.left
    }
    return value.data
  }

  max() {
    if (this.top === null) {
      return null
    }
    let value = this.top;
    while (value.right) {
      value = value.right
    }
    return value.data
  }
}

module.exports = {
  BinarySearchTree
};