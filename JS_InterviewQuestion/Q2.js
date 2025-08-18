// What are anonymous functions in JavaScript? Define their syntax and implementation.
// Anonymous functions are functions that do not have a name. They are often used as arguments to other functions or assigned to variables.


function sayHelloWorld() {
    console.log("Hello World from a named function");
}
sayHelloWorld(); // Calling the function to see the output

// Anonymous function example
const greet = function() {
    console.log("Hello from an anonymous function");
}

greet(); // Calling the anonymous function to see the output

// can you provide an example of an anonymous function being passed as an argument?
function executeFunction(fn) {
    fn(); // Calling the passed function
}       

executeFunction(() => {
    console.log("This is an anonymous function passed as an argument");
}); // Passing an anonymous function as an argument         