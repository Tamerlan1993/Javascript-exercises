class Stack{
    constructor(){
        this.stack=[]
    }
    push(n){
        this.stack.push(n)
    }
    pop(){
        return this.stack.pop()
    }
}

const s = new Stack();
s.push(1);
s.push(2);
s.pop(); // returns 2
s.pop(); // returns 1