// Exercise 6
// We have an object storing salaries of our team:

// JAVASCRIPT
let salaries = {
    Fred: 100,
    Ted: 160,
    Ghaith: 130
}
// Write a code to sum all salaries and store in the variable sum. If salaries is empty, then the result must be 0.

let sum = 0;

for (let employee in salaries) {
    sum += salaries[employee];
}

console.log(sum); 