// Create an inheritance relationship between a parent and child class. 
// Invoke the parent constructor from the child class. 
// Create main.js to call parent class methods from a child class object.


class Person {
    constructor(name,age) {
        this.name = name;
        this.age=age;
    }

    getName() {
        return this.name;
    }

    getAge(){
        return this.age;
    }
    printNameAge() {
        console.log(`Hello, my name is ${this.name}`);
        console.log(`My age is ${this.age} years old`);
    }
}   

export default Person;
// Exporting Person class to be used in Child.js