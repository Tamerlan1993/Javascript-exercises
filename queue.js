class Queue {
    constructor() {
        this.queue = [];
    }
    add(n) {
        this.queue.unshift(n)
    }
    remove() {
        return this.queue.pop();
    }
}

const q = new Queue();
q.add(1);
q.add(2);
q.add(3);
let removed=q.remove()

console.log(q,removed);