// Exercise 3
// Look at the code. What will be result of the call at the last line and why?

// JAVASCRIPT
let phrase = "Hello"

if (true) {
    let user = "John";
    function sayHi() {
        alert(`${phrase}, ${user}`)
    }
}

sayHi()

// It will call the function sayHI() that will call the method alert, using the variables 'phrase' and 'user' to create a new string "Hello, John".