// Exercise 1
// We have a simple object:

let user = {
    name: "John",
    years: 30,
}

//   Write the destructuring assignment that reads:
//   name property into the variable name.
//   years property into the variable age.
//   isAdmin property into the variable isAdmin (false if absent)

let { name, years: age, isAdmin = false } = user;

console.log(name);
console.log(age);
console.log(isAdmin);