// Q1: Create an array called expenses with at least 5 values.
// Find total expenses, highest expense, and lowest expense.

let expenses = [1200, 4500, 2300, 800, 6700];

// Calculate total
let total = 0;
for (let i = 0; i < expenses.length; i++) {
  total += expenses[i];
}

// Find highest and lowest
let highest = expenses[0];
let lowest = expenses[0];

for (let i = 1; i < expenses.length; i++) {
  if (expenses[i] > highest) highest = expenses[i];
  if (expenses[i] < lowest) lowest = expenses[i];
}

console.log("Expenses:", expenses);
console.log("Total:", total);
console.log("Highest:", highest);
console.log("Lowest:", lowest);

/*
⏱ Time Complexity:
- Total calculation loop → O(n)
- Highest & Lowest loop → O(n)
Overall → O(n)
*/
