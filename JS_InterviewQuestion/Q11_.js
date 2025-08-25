// What is the difference between null and undefined in JavaScript?

// In JavaScript, null and undefined are both used to represent the absence of a value, but they have different meanings and uses.

// null is an assignment value that represents the intentional absence of any object value.
// It is explicitly set by the programmer to indicate that a variable should have no value.

let a = null;
console.log(a); // null
console.log(typeof a); // "object" (this is a known quirk in JavaScript)

// undefined, on the other hand, is a type that indicates that a variable has been declared but has not yet been assigned a value.
let b;
console.log(b); // undefined
console.log(typeof b); // "undefined"   

// In summary, use null when you want to explicitly indicate that a variable has no value,
// and use undefined to indicate that a variable has been declared but not yet assigned a value.

// Output:
// null     

// "object"
// undefined    
// "undefined"  


// Note: The typeof null returning "object" is a long-standing bug in JavaScript, but it has been kept for backward compatibility.
// It is important to remember this quirk when working with null values in JavaScript.

