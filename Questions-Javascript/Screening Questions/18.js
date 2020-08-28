class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  
  put(data) {
    var newNode = new Node(data);
  
    // If root is null then newNode will be added to the tree and made root.
    if(this.root === null)
      this.root = newNode;
    else
      this.insertNode(this.root, newNode);
  }
 
  insertNode(node, newNode) {
    // If the data is less than the node data, move left of the tree, else right
      if(newNode.data < node.data)
        if(node.left === null)
          node.left = newNode;
        else
          this.insertNode(node.left, newNode); 
      else
        if(node.right === null)
          node.right = newNode;
        else
          this.insertNode(node.right,newNode);
  }
  
  remove(data) {
    // Root is re-initialized with root of a modified tree.
    this.root = this.removeNode(this.root, data);
    return this.root;
  }
  
  removeNode(node, data) {
    // If the root is null then tree is empty
    if(node === null) {
      console.log(`The tree doesn't contain this data`);
      return node;
    }
    
    // If data to be deleted is less than root's data then move to the left
    else if(data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    }
 
    // If data to be deleted is greater than root's data then move to the right
    else if(data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    }
 
    // If data is equal to the root's data then delete this node
    else {
      // deleting node with no children
      if(node.left === null && node.right === null) {
        node = null;
        return node;
      }
 
      // deleting node with one children
      if(node.left === null) {
          node = node.right;
          return node;
      }
         
      else if(node.right === null) {
          node = node.left;
          return node;
      }
 
      // Deleting node with two children: minumum node of the rigt subtree is             stored in aux
      var aux = this.findMinNode(node.right);
      node.data = aux.data;
 
      node.right = this.removeNode(node.right, aux.data);
      return node;
    }
  }
  
  findMinNode(node) {
    // If left of a node is null,then it must be the minimum node
    if(node.left === null)
      return node;
    else
      return this.findMinNode(node.left);
  }

  inorder(node) {
    if(node !== null) {
      this.inorder(node.left);
      console.log(node.data);
      this.inorder(node.right);
    }
  }
  
  preorder(node) {
    if(node !== null) {
      console.log(node.data);
      this.inorder(node.left);
      this.inorder(node.right);
    }
  }
  
  postorder(node) {
    if(node !== null) {
      this.inorder(node.left);
      this.inorder(node.right);
      console.log(node.data);
    }
  }

  getRootNode() {
    return this.root;     //Helpful when doing traversal
  }

  search(node, data) {
    if(node === null)
      return false;
  
    // If data is less than node's data, move left
    else if(data < node.data)
      return this.search(node.left, data);
  
    // If data is more than node's data, move right
    else if(data > node.data)
      return this.search(node.right, data);
 
    // If data is equal to the node data , return node
    else
      return true;
  }
}

var bst = new BinarySearchTree();

bst.put(15);
bst.put(25);
bst.put(10);
bst.put(7);
bst.put(22);
bst.put(17);
bst.put(13);
bst.put(5);
bst.put(9);
bst.put(27);

// var globalRoot = bst.getRootNode();
// bst.inorder(globalRoot);
// console.log('');
// bst.remove(77);
// console.log('');
// bst.inorder(globalRoot);

// var searchedNode = bst.contains(bst.root,100);
// if(searchedNode === true)
//   console.log(`Data is present.`);
// else
//   console.log(`Data is not present.`);

var globalRoot = bst.getRootNode();
bst.inorder(globalRoot);
console.log('');
bst.preorder(globalRoot);
console.log('');
bst.postorder(globalRoot);




