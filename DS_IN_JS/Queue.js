class Node{
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Queue{
    constructor() {
        this.front = null;
        this.rear = null;
    }

    enqueue(value) {
        let node = new Node(value);

        if(this.isEmpty()) {
            this.front = node;
            this.rear = node;
        } else {
            this.rear.next = node;
            this.rear = node;
        }
    }

    dequeue() {
        if(this.front === null) return null;

        let value = this.front.value;

        if(this.front === this.rear) {
            this.front = null;
            this.rear = null;
        } else {
            this.front = this.front.next;
        }
        
        return value;
    }

    isEmpty() {
        return (this.front === null && this.rear === null)
    }
}

// let queue = new Queue();

// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// console.log(queue);
// console.log(queue.dequeue());
// console.log(queue);

module.exports = Queue