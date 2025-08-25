// A classic programming interview question that involves using array methods (filter, map, reduce) and JavaScript objects.

// Create a function that takes an array of student objects and returns an array of names of students who have scored more then 36 %.
// Upper case the student name who have scored more then 36 %.
// Sum of marks of students who scored more than 36 % using reduce method.

const students = [
    { name: "Alice", score: 45 },   
    { name: "Bob", score: 32 },
    { name: "Charlie", score: 38 },
    { name: "David", score: 28 },
        
    { name: "Eve", score: 50 }
];  

function getPassingStudents(students) {
    return students
        .filter(student => student.score > 36) // Filter students who scored more than 36%
        .map(student => student.name); // Map to get an array of names
} 

// Write a function Upper case the student name who have scored more then 36 %.
function getUpperCasePassingStudents(students) {
    return students
        .filter(student => student.score > 36) // Filter students who scored more than 36%
        .map(student => student.name.toUpperCase()); // Map to get an array of names in uppercase
}



// how reduce method works  , use to sum or consolidate array elements into a single value
// Write function for Sum of marks of students who scored more than 36 %
const listOfStudents=students.filter(student => student.score > 36);
const totalSum=listOfStudents.reduce((acc, student) => acc + student.score, 0); // Reduce to sum the scores, initial value is 0

console.log(totalSum); 
//  
// Output: 133

const upperCasePassingStudents = getUpperCasePassingStudents(students);
console.log(upperCasePassingStudents); // Output: [ 'ALICE', 'CHARLIE', 'EVE' ] 

const passingStudents = getPassingStudents(students);
console.log(passingStudents); // Output: [ 'Alice', 'Charlie', 'Eve' ]