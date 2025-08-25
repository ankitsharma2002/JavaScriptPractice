// Child.js Create an inheritance relationship between a parent and child class. Invoke the parent constructor from the child class.

import Person from './Person.js'; 

class Student extends Person {
    constructor(name, age,skill) {
        super(name, age); // Invoking the parent constructor
        this.skill=skill;
    }   

    introduce() {
        const parentInfo=super.printNameAge();
        return `${parentInfo}, I am learning : ${this.skill}`;
    }   
}
export default Student;
// Exporting Child class to be used in main.js
