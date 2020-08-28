const Queue = require('./Queue');

class Node{
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor() {
        this.root = null;
        this.size = 0;
    }

    insertIntoRoot(root, value) {
        if(!root){
            let node = new Node(value);
            root = node;
        } else if(value <= root.value) {
            root.left = this.insertIntoRoot(root.left, value);
        } else {
            root.right = this.insertIntoRoot(root.right, value);
        }

        return root;
    }

    insert(value) {
        this.root = this.insertIntoRoot(this.root, value);
        this.size++;
    }

    search(value) {
        return this.searchFromRoot(this.root, value);
    }

    searchFromRoot(root, value) {
        if(!root) return false;
        
        if(root.value === value) return true;

        if(value <= root.value) return this.searchFromRoot(root.left, value);

        if(value > root.value) return this.searchFromRoot(root.right, value);
    }

    min() {
        if(!this.root){
            return null;
        }

        let current = this.root;
        while(current.left !== null) {
            current = current.left;
        }

        return current.value;
    }

    max() {
        if(!this.root){
            return null;
        }

        let current = this.root;
        while(current.right !== null) {
            current = current.right;
        }

        return current.value;
    }

    height() {
        return this.calcHeight(this.root);
    }

    calcHeight(root) {
        if(root === null) return -1;
        return Math.max(this.calcHeight(root.left), this.calcHeight(root.right)) + 1;
    }

    levelOrderTraversal() {
        if(this.root === null) return;

        const queue = new Queue();
        queue.enqueue(this.root);

        while(!queue.isEmpty()) {
            let current = queue.dequeue();
            console.log(current.value);
            if(current.left !== null) queue.enqueue(current.left);
            if(current.right !== null) queue.enqueue(current.right);
        }
    }
}

let bst = new BST();

bst.insert(4);
bst.insert(1);
bst.insert(2);
bst.insert(3);

bst.insert(5);
bst.insert(6);
bst.insert(7);
bst.insert(8);
// console.log(bst.root);
// console.log(bst.size);
// console.log(bst.search(0));
// console.log(bst.root);
bst.levelOrderTraversal();