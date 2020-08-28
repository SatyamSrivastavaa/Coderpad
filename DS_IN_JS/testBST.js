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
}

let bst = new BST();

bst.insert(5);
bst.insert(2);
bst.insert(3);
bst.insert(8);
bst.insert(88);
console.log(bst.root);
console.log(bst.size);
console.log(bst.search(0));