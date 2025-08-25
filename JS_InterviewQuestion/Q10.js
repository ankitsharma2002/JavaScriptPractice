// What is the difference between == and ===?
// In JavaScript, == is the equality operator that compares two values for equality after performing type coercion if necessary.
// This means that if the values being compared are of different types, JavaScript will attempt to  
// convert one or both values to a common type before making the comparison.
// For example, 5 == "5" would return true because the string "5" is coerced to the number 5 before comparison.

// On the other hand, === is the strict equality operator that compares both the value and the type without 
// performing any type coercion.
// This means that if the values being compared are of different types, the comparison will return false.
// For example, 5 === "5" would return false because the types (number and  string) are different.

console.log(5 == "5"); // true
console.log(5 === "5"); // false    
console.log(0 == false); // true
console.log(0 === false); // false


// Output:
// true

// false
// true
// false
// In summary, use == when you want to compare values with type coercion, and use === when you want to compare both value and type strictly.
// It's generally recommended to use === to avoid unexpected results due to type coercion.

