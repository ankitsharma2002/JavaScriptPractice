// Q8, 
// Create an inheritance relationship between a parent and child class. 
// Invoke the parent constructor from the child class. 
// Create main.js to call parent class methods from a child class object.

// Q9, From the above code, explain how the super and this keywords help achieve the solution.
import Student from './Student.js';

const student = new Student("Ankit", 22, "JavaScript");
const studentIntro=student.introduce(); // Calling a method from the child class which in turn calls a method from the parent class
console.log(student.introduce());
console.log(studentIntro);


// Output:
// Hello, my name is Ankit
// My age is 22 years old       
// I am learning : JavaScript 


// Note: Ensure that Person.js and Student.js are in the same directory as main.js
// Person.js is the parent class file       
// Student.js is the child class file
// main.js is the main file to execute the code

// Create an inheritance relationship between a parent and child class. Invoke the parent constructor from the child class. 
// Create main.js to call parent class methods from a child class object.