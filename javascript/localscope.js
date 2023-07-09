function greet() {
  let message = 'Hello, John!';
  console.log(message);
}

greet(); // Output: Hello, John!
console.log(message); // Output: ReferenceError: message is not defined

// Local var menggantikan var global dengan nama yang sama
let name = 'John';

function greet() {
  let name = 'Jane';
  console.log('Hello, ' + name + '!');
}

greet(); // Output: Hello, Jane!
console.log('Hello, ' + name + '!'); // Output: Hello, John!


