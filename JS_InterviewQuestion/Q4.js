// push: Adds one or more elements to the end of an array.
let arr1 = [1, 2, 3];
arr1.push(4); // [1, 2, 3, 4]

// pop: Removes the last element from an array and returns it.
let arr2 = [1, 2, 3];
let lastElement = arr2.pop(); // lastElement = 3, arr2 = [1, 2]

// slice: Returns a shallow copy of a portion of an array into a new array.
let arr3 = [1, 2, 3, 4];
let slicedArr = arr3.slice(1, 3); // slicedArr = [2, 3], arr3 = [1, 2, 3, 4]

// shift: Removes the first element from an array and returns it.
let arr4 = [1, 2, 3];
let firstElement = arr4.shift(); // firstElement = 1, arr4 = [2, 3]

// unshift: Adds one or more elements to the beginning of an array.
let arr5 = [2, 3];
arr5.unshift(1); // [1, 2, 3]