// What are promises in JavaScript? Explain the difference between callback functions and promises with an example.
// Promises are objects that represent the eventual completion (or failure) of an asynchronous operation and its resulting value.

// The main difference between callback functions and promises is how they handle asynchronous operations.
// Callback functions can lead to "callback hell" when multiple asynchronous operations are nested,
// making the code hard to read and maintain. Promises provide a cleaner and more manageable way to handle asynchronous operations,
// allowing chaining of operations and better error handling. the fetched data.         

function fetchDataPromise() {
    console.log("Fetching data...");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: "John", age: 30 };
            console.log("Data fetched");
            resolve(data); // Resolving the promise with the fetched data
        }, 2000); // Simulating a delay of 2 seconds
    });
}

fetchDataPromise().then(data => {
        console.log("Displaying data:", data); 
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });

const data=await fetchDataPromise();
console.log("Displaying data with await :", data);

// Output:
// Fetching data...
// Data fetched
// Displaying data: { name: "John", age: 30 }

// Fetching data...
// Displaying data with await : { name: "John", age: 30 }



