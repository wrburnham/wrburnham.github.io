class Node {
  
  constructor(bit, key, val) {
    this.bit = bit;
    this.key = key;
    this.val = val;
    this.left = null;
    this.right = null;
  }
  
}

class Pat {
  
  constructor() {
    this.head = new Node(-1, null, null);
    this.head.left = this.head;
    this.charSize = 8; // 8 bits for standard ascii chars
    this.msb = 1 << this.charSize - 1; // most significant bit is 128 (10000000 in binary)
  }

  searchPrefix(prefix) {
    let parent = this.searchPrefixRecursive(this.head.left, prefix, -1);
    if (parent === null) {
      return null;
    }
    let ints = [];
    this.prefixWalkPopulate(parent, prefix, ints, parent.left, parent.right);
    return ints;
  }

  searchPrefixRecursive = function(node, prefix, i) {
    if (node.bit < i) {
      if (node.key.startsWith(prefix)) {
        return node;
      }
      return null;
    }
    if (node.left !== node && !this.isSet(prefix, node.bit)) {
      return this.searchPrefixRecursive(node.left, prefix, node.bit);
    }
    if (node.right !== node) {
      return this.searchPrefixRecursive(node.right, prefix, node.bit);
    }
    if (node.bit > i && node.key.startsWith(prefix)) {
      return node;
    }
    return null;
  }
  
  prefixWalkPopulate = function(parent, prefix, ints, left, right) {
    if (parent === null) {
      return;
    }
    if (parent.key.startsWith(prefix)) {
      ints.push(parent.val);
    }
    if (left !== null && left.bit > parent.bit) {
      this.prefixWalkPopulate(left, prefix, ints, left.left, left.right);
    }
    if (right !== null && right.bit > parent.bit) {
      this.prefixWalkPopulate(right, prefix, ints, right.left, right.right);
    }
  }
  
  search = function(key) {
    if (key === null) {
      return null; // null key not supported
    }
    let node = this.searchRecursive(this.head.left, key, -1);
    if (node === null || node.key !== key) {
      return null;
    }
    return node.val;
  }
  
  insert = function(key, val) {
    if (key === null) {
      return; // null key not supported
    }
    let node = this.searchRecursive(this.head.left, key, -1);
    if (node !== null && key === node.key) {
      node.val = val;
      return;
    }
    let bit = this.mostSignificantCommonBit(key, node.key);
    this.head.left = this.insertRecursive(this.head.left, key, val, bit, this.head);
  }
  
  searchRecursive = function(node, key, i) {
    if (node.bit <= i) {
      return node;
    }
    if (this.isSet(key, node.bit) === false) {
      return this.searchRecursive(node.left, key, node.bit);
    }
    return this.searchRecursive(node.right, key, node.bit);
  }
  
  insertRecursive = function(node, key, val, i, parent) {
    if (node.bit >= i || node.bit <= parent.bit) {
      let tmp = new Node(i, key, val);
      let isSet = this.isSet(key, tmp.bit);
      tmp.left = isSet ? node : tmp;
      tmp.right = isSet ? tmp : node;
      return tmp;
    }
    if (!this.isSet(key, node.bit)) {
      node.left = this.insertRecursive(node.left, key, val, i, node);
    } else {
      node.right = this.insertRecursive(node.right, key, val, i, node);
    }
    return node;
  }
  
  mostSignificantCommonBit = function(key, otherKey) {
    if (otherKey === null) {
      return 0;
    }
    /*
         example 1: most significant common bit is 8 (bit index 7)
         
                           1111111
         bit     12345678 90123456
             A = 01000001, 
            AA = 01000001 01000001
     
         example 2: most significant common bit is 2 (bit index 6)
         
             B = 01000010
            AA = 01000001 01000001
     
     */
     let bit = 0;
     let otherKeyLen = otherKey === null ? 0 : otherKey.length;
     let maxBits = Math.max(key.length, otherKeyLen) * this.charSize - 1;
     while (this.isSet(key, bit) === this.isSet(otherKey, bit) && bit < maxBits) {
       bit++;
     }
     return bit;
  }
  
  isSet = function(key, bitIndex) {
    /*
      if bit index is 7 (the 8th bit), floor(7/8) = 0
      if bit index is 8 (the 9th bit), floor(8/8) = 1
      if bit index is 15 (the 16th bit), floor(16/8) = 2
      ... 
    */
    let charIndex = Math.floor(bitIndex / this.charSize);
    if (key == null || charIndex >= key.length) {
      return false;
    }
    
    /*
      if bit index is 0, 0 mod 8 = 0
      if bit index is 1, 1 mod 8 = 1
      if bit index is 2, 2 mod 8 = 2
      ...
      if bit index is 7, 7 mod 8 = 7
      if bit index is 8, 8 mod 8 = 0
      ...
    */
    let bitIndexOfChar = bitIndex % this.charSize;
    
    /*
      mask:
      
      128 := 10000000 (bit 0)
       64 := 01000000 (bit 1)
       32 := 00100000 (bit 2)
          ...
        2 := 00000010 (bit 6)
        1 := 00000001 (bit 7)
     */    
    let mask = this.msb >>> bitIndexOfChar;
    
    return (key.charCodeAt(charIndex) & mask) != 0;
  }
  
}
