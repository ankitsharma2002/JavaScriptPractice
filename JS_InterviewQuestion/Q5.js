// Q5_  Is JavaScript Asynchronous? Prove with an example. 


console.log("Start");
// Print this line console.log("This is first statement");
setTimeout(() => {
    console.log("This is second statement");
}, 2000); // Simulating an asynchronous operation with a delay of 2 seconds


console.log("End");

// Output:  
// Start
// End
// This is second statement
