class Stack{
    constructor(){
    this.arr=[]
    }
    adding(element){
    this.arr.push(element)
    }
    removing(){
    return this.isEmpty() ?  "Stack is empty":this.arr.pop()
    }
    top(){
    return this.isEmpty()?"Stack is empty":this.arr[this.arr.length-1]
    }
    isEmpty(){
    
    return this.arr.length==0
    }
    
}
let stack = new Stack
let stack1 = new Stack
// console.log(stack.removing())
stack.adding(10)
stack.removing()

console.log(stack.removing())
stack.adding(20)
stack.adding(30)
console.log(stack)
console.log(stack.top())
console.log(stack)