// What are callback functions in JavaScript?

// Callback functions are functions that are passed as arguments to other functions and are executed after 
// some operation has been completed. They are commonly used for asynchronous operations, 
// such as handling events or making API calls.

function fetchData(callback) {
    console.log("Fetching data...");
    setTimeout(() => {
        const data = { name: "John", age: 30 };
        console.log("Data fetched");
        callback(data); // Calling the callback function with the fetched data
    }, 2000); // Simulating a delay of 2 seconds
}   

function displayData(data) {
    console.log("Displaying data:", data);
}   

fetchData(displayData); // Passing displayData as a callback function   

// Output:
// Fetching data...
// Data fetched
// Displaying data: { name: "John", age: 30 }
// In this example, fetchData simulates an asynchronous operation of fetching data.
// Once the data is fetched, it calls the displayData function (the callback) to display