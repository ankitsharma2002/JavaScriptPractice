// Q2: Create array of student names. 
// Add new student at beginning, remove last, and alphabetize.

let studentNames = ["Rahul", "Anita", "Kiran", "Suman", "Deepak"];

// Add new student at beginning
studentNames.unshift("Meera");

// Remove last student
studentNames.pop();

// Alphabetize
studentNames.sort();

console.log("Final Student Names:", studentNames);

/*
⏱ Time Complexity:
- unshift() → O(n) (shifts elements)
- pop() → O(1)
- sort() → O(n log n) (average case)
Overall → O(n log n) (due to sorting)
*/
