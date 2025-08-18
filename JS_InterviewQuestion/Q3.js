// var: Function-scoped
// let: Block-scoped
// const: Immutable (cannot be reassigned)

// var example
function varExample() {
    console.log(a); // undefined (hoisted)
    var a = 10;
    console.log(a); // 10
    if (true) {
        var a = 20; // Same variable (function-scoped)
        console.log(a); // 20
    }
    console.log(a); // 20
}
varExample();

// let example
function letExample() {
    // console.log(b); // ReferenceError (not initialized)
    let b = 10;
    console.log(b); // 10
    if (true) {
        let b = 20; // Block-scoped variable
        console.log(b); // 20
    }
    console.log(b); // 10
}
letExample();

// const example
function constExample() {
    const c = 10;
    console.log(c); // 10
    // c = 20; // TypeError: Assignment to constant variable
    const obj = { key: "value" };
    console.log(obj); // { key: "value" }
    obj.key = "newValue"; // Allowed (modifying object property)
    console.log(obj); // { key: "newValue" }
}
constExample();

