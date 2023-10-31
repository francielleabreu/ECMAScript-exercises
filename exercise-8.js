// Exercise 8
// Rewrite if..else using multiple ternary operators '?'.

// JAVASCRIPT
// let message;

// if (login == 'Employee') {
//   message = 'Hello';
// } else if (login == 'Director') {
//   message = 'Greetings';
// } else if (login == '') {
//   message = 'No login';
// } else {
//   message = '';
// }

//The code rewrited 
let message = (login == 'Employee') ? 'Hello':
              (login == 'Director') ? 'Greetings':
              (login == '') ? 'No login':
              '';