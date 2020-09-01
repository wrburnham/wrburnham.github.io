class Node {
  constructor() {
    this.label = null;
    this.val = null;
    this.left = null;
    this.equal = null;
    this.right = null;
  }
}

class Ternary {
  constructor() {
    this.head = new Node();
  }
  insert = function(word, val) {
    this.insertRecursive(this.head, word, val);
  }
  findOneWithPrefix = function(prefix) {
    let startNode = this.findNodeWithPrefixRecursive(this.head, prefix);
    let found = null;
    while (startNode !== null && found === null) {
      found = startNode.val;
      startNode = startNode.equal;
    }
    return found;
  }
  findAllWithPrefix = function(prefix) {
    let results = [];
    let startNode = this.findNodeWithPrefixRecursive(this.head, prefix);
    this.walkAllWithPrefixRecursive(startNode, results);
    return results;
  }
  insertRecursive = function(node, word, val) {
    if (word === null || word.length === 0) {
      return;
    }
    let letter = word[0];
    if (node.label === null) {
      node.label = letter;
    }
    if (letter < node.label) {
      if (node.left === null) {
        node.left = new Node();
      }
      this.insertRecursive(node.left, word, val);
    } else if (letter === node.label) {
      if (word.length === 1) {
        node.val = val;
      } else {
        if (node.equal === null) {
          node.equal = new Node();
        }
        let subword = word.substr(1);
        this.insertRecursive(node.equal, subword, val);
      }
    } else if (letter > node.label) {
      if (node.right === null) {
        node.right = new Node();
      }
      this.insertRecursive(node.right, word, val);
    }
  }
  search = function(word) {
    return this.searchRecursive(this.head, word);
  }
  searchRecursive = function(node, word) {
    if (word === null || word.length === 0 || node === null) {
      return null;
    }
    let letter = word[0];
    if (letter < node.label) {
      return this.searchRecursive(node.left, word);
    } else if (letter === node.label) {
      if (word.length === 1) {
        return node.val;
      } else {
        let subword = word.substr(1);
        return this.searchRecursive(node.equal, subword);
      }
    } else if (letter > node.label) {
      return this.searchRecursive(node.right, word);
    }
  }
  walkAllWithPrefixRecursive = function(node, results) {
    if (node.val !== null) {
      results.push(node.val);
    }
    let nextNode = node.equal;
    if (nextNode === null) {
      return;
    }
    if (nextNode.left !== null) {
      this.walkAllWithPrefixRecursive(nextNode.left, results);
    }
    this.walkAllWithPrefixRecursive(nextNode, results);
    if (nextNode.right !== null) {
      this.walkAllWithPrefixRecursive(nextNode.right, results);
    }
  }
  findNodeWithPrefixRecursive = function(node, prefix) {
    if (prefix === null || prefix.length === 0 || node === null) {
      return null;
    }
    let letter = prefix[0];
    if (letter < node.label) {
      return this.findNodeWithPrefixRecursive(node.left, prefix);
    } else if (letter === node.label) {
      if (prefix.length === 1) {
        return node;
      } else {
        let subPrefix = prefix.substr(1);
        return this.findNodeWithPrefixRecursive(node.equal, subPrefix);
      }
    } else if (letter > node.label) {
      return this.findNodeWithPrefixRecursive(node.right, prefix);
    }
  }
}
