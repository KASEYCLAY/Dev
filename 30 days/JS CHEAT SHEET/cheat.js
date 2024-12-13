// Output to console
console.log("Hello, World!"); // Use for debugging or testing output in the browser console

// Variables
// let x = 10;  // Block-scoped, mutable; use for values that may change later in the code
// const y = 20; // Block-scoped, immutable; use for constants or values that shouldn't change
//var z = 30;  // Function-scoped; avoid using `var` in modern code for better scoping control

// Data types
// let str = "Hello"; // String: Use for textual data
// let num = 42;      // Number: Use for numeric values
// let bool = true;   // Boolean: Use for true/false conditions
// let undef;         // Undefined: A declared variable not assigned a value
// let n = null;      // Null: Represents an intentionally empty value
// let arr = [1, 2, 3]; // Array: Use for ordered collections of items
// let obj = {key: "value"}; // Object: Use for key-value pairs, representing structured data

// Function Declaration
function add(a, b) {
    return a + b; // Use for reusable code blocks that perform specific tasks
}

// Function Expression
const subtract = function(a, b) {
    return a - b; // Preferred for dynamic function assignments
};

// Arrow Function
const multiply = (a, b) => a * b; // Use for concise one-liners or callbacks, especially in modern JavaScript

// Default Parameters
function greet(name = "Guest") {
    console.log(`Hello, ${name}!`); // Use to provide fallback values when parameters are missing
}

// Conditional Statements
if (x > y) {
    console.log("x is greater"); // Use for executing different logic based on conditions
} else if (x === y) {
    console.log("x equals y");
} else {
    console.log("x is smaller");
}

// Ternary Operator
let result = x > y ? "x is greater" : "x is smaller"; // Use for concise conditionals

// Loops
for (let i = 0; i < 5; i++) {
    console.log(i); // Use when you know the exact number of iterations
}

let i = 0;
while (i < 5) {
    console.log(i);
    i++; // Use for unknown iterations; repeat until a condition is met
}

do {
    console.log(i);
    i++;
} while (i < 5); // Use when you need the loop to execute at least once

// Creating an Array
let fruits = ["apple", "banana", "cherry"]; // Use for ordered collections of similar items

// Accessing Elements
console.log(fruits[1]); // Use array indices to access specific elements

// Methods
fruits.push("orange"); // Add to end
fruits.pop();          // Remove from end
fruits.unshift("grape"); // Add to start
fruits.shift();        // Remove from start
fruits.splice(1, 1);   // Remove elements (index, count)
console.log(fruits.length); // Get array length for dynamic operations

// Iteration
fruits.forEach(fruit => console.log(fruit)); // Use for simple iteration
let upperFruits = fruits.map(fruit => fruit.toUpperCase()); // Transform items into a new array

// Object Definition
let person = {
    name: "John", // Key-value pairs for related data
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

// Access Properties
console.log(person.name); // Use to retrieve specific details from an object
console.log(person['age']); // Use bracket notation when keys are dynamic

// Add/Update Properties
person.job = "Developer"; // Use to extend or modify existing objects
person.age = 31;

// Delete Property
delete person.age; // Use when a property is no longer needed

// Object Methods
Object.keys(person); // Use to iterate over property names
Object.values(person); // Use to iterate over property values
Object.entries(person); // Use to work with key-value pairs

// Adding Event Listeners
document.getElementById("myButton").addEventListener("click", function() {
    alert("Button Clicked!"); // Use for user interaction handling
});

// Example in HTML
// <button id="myButton">Click Me</button>

// Selecting Elements
let element = document.querySelector("#myElement"); // Use for precise selection (id, class, or element)
let elements = document.querySelectorAll(".myClass"); // Use for multiple elements

// Modifying Content
element.textContent = "New Text"; // Update plain text
element.innerHTML = "<b>Bold Text</b>"; // Update with HTML content

// Modifying Attributes
element.setAttribute("class", "newClass"); // Add or change attributes
let attr = element.getAttribute("class");
element.removeAttribute("class");

// Styling
element.style.color = "blue"; // Dynamically apply CSS
element.style.fontSize = "20px";

// Promises
let myPromise = new Promise((resolve, reject) => {
    let success = true;
    if (success) resolve("Operation Successful"); // Use for async operations (e.g., fetch data)
    else reject("Operation Failed");
});

myPromise
    .then(response => console.log(response))
    .catch(error => console.log(error));

// Async/Await
async function fetchData() {
    try {
        let response = await fetch("https://api.example.com/data"); // Fetch remote data
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error); // Use for cleaner asynchronous code
    }
}

// String Methods
let text = "JavaScript Cheat Sheet";
console.log(text.toUpperCase()); // Convert to uppercase
console.log(text.split(" ")); // Split string into an array

// Array Methods
// let numbers = [1, 2, 3, 4];
console.log(numbers.includes(2)); // Check if value exists
console.log(numbers.find(num => num > 2)); // Find first matching value
console.log(numbers.filter(num => num > 2)); // Get all matching values

// Math
console.log(Math.random()); // Generate random number
console.log(Math.round(4.7)); // Round to nearest integer
console.log(Math.max(1, 2, 3)); // Find maximum value
console.log(Math.min(1, 2, 3)); // Find minimum value

// Date
let now = new Date();
console.log(now.toISOString()); // Get current date/time in ISO format
console.log(now.getFullYear()); // Get current year

debugger; // Pauses execution and opens dev tools
console.log(variable); // Print variables to check their state

/**************************************
 * Example: E-Commerce Website
 **************************************/

// 1. Objects: Representing a product
let product = {
    id: 101,
    name: "Wireless Headphones",
    price: 59.99,
    inStock: true,
    details: function () {
        console.log(`${this.name} costs $${this.price}`);
    },
};
product.details(); // Output: Wireless Headphones costs $59.99

// 2. Arrays: Shopping cart
let cart = [];
cart.push(product); // Add product to cart
console.log(cart); // Output: [{id: 101, name: "Wireless Headphones", price: 59.99, inStock: true}]

// 3. Conditional Statements: Check stock
if (product.inStock) {
    console.log("Product added to cart");
} else {
    console.log("Product is out of stock");
}

// 4. Functions: Calculate total price
function calculateCartTotal(cartItems) {
    return cartItems.reduce((total, item) => total + item.price, 0);
}
console.log(`Cart Total: $${calculateCartTotal(cart)}`); // Output: Cart Total: $59.99

/**************************************
 * Example: Form Validation
 **************************************/

// HTML for Context
// <form id="signupForm">
//   <input id="email" type="text" placeholder="Enter your email">
//   <button type="submit">Sign Up</button>
// </form>

// 1. Event: Form submission
document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission
    let emailInput = document.getElementById("email").value;

    // 2. String methods: Validate email
    if (emailInput.trim() === "" || !emailInput.includes("@")) {
        alert("Please enter a valid email");
    } else {
        alert("Thank you for signing up!");
    }
});

/**************************************
 * Example: Fetch Weather Data
 **************************************/

// 1. Async/Await: Fetch data from API
async function getWeather(city) {
    try {
        let response = await fetch(`https://api.example.com/weather?city=${city}`);
        let data = await response.json();

        // 2. DOM Manipulation: Update UI
        document.getElementById("weather").textContent = `Current temperature in ${city} is ${data.temperature}°C`;
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}
getWeather("New York");

/**************************************
 * Example: Array and String Operations
 **************************************/

// 1. Array Filtering: Filter products by price
let products = [
    { name: "Laptop", price: 899 },
    { name: "Mouse", price: 20 },
    { name: "Keyboard", price: 50 },
];
let expensiveProducts = products.filter(product => product.price > 100);
console.log(expensiveProducts); // Output: [{name: "Laptop", price: 899}]

// 2. String Manipulation: Format product names
let productNames = products.map(product => product.name.toUpperCase());
console.log(productNames); // Output: ["LAPTOP", "MOUSE", "KEYBOARD"]

/**************************************
 * Example: Dynamic UI Updates
 **************************************/

// HTML for Context
// <button id="changeColor">Change Background Color</button>

// 1. Event Handling: Button click
document.getElementById("changeColor").addEventListener("click", function () {
    // 2. DOM Manipulation: Change background color
    document.body.style.backgroundColor = "#FFD700"; // Gold
});

/**************************************
 * Example: Debugging in Action
 **************************************/
function calculateArea(width, height) {
    debugger; // Pause here to inspect variables
    return width * height;
}
console.log(calculateArea(5, 10)); // Output: 50

/**************************************
 * Example: Reusing Functions and Logic
 **************************************/

// 1. Function with Default Parameters
function greetUser(name = "Guest") {
    return `Hello, ${name}! Welcome to our site.`;
}
console.log(greetUser()); // Output: Hello, Guest! Welcome to our site.
console.log(greetUser("Alice")); // Output: Hello, Alice! Welcome to our site.

/**************************************
 * Example: Random Fun
 **************************************/

// Generate a random quote
let quotes = ["Stay positive!", "Work hard!", "Never give up!"];
function getRandomQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}
console.log(getRandomQuote()); // Output: Random quote from the array

// 1. What is JavaScript?
// JavaScript is a versatile, high-level, interpreted programming language used for web development, among other applications.

// 2. How do you declare a variable in JavaScript?
let x; // Using let
const y = 10; // Using const (for constants)
var z; // Using var (old way)

// 3. What is the difference between let, const, and var?
// - `let`: Block-scoped, can be reassigned.
// - `const`: Block-scoped, cannot be reassigned.
// - `var`: Function-scoped, hoisted, not recommended for modern use.

// 4. What is hoisting in JavaScript?
// Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their scope during compile time.

// 5. What are data types in JavaScript?
// 1. String, 2. Number, 3. Boolean, 4. Undefined, 5. Null, 6. Symbol, 7. BigInt, 8. Object

// 6. What is the difference between `==` and `===`?
// `==` checks for equality with type coercion, `===` checks for equality without type coercion.

// 7. What is a function in JavaScript?
function greet() {
    console.log('Hello!');
} // A reusable block of code that performs a task.

// 8. What is the difference between function declarations and function expressions?
function declarationExample() {} // Function declaration.
const functionExpressionExample = function() {}; // Function expression assigned to a variable.

// 9. What is an arrow function?
const add = (a, b) => a + b; // A shorter syntax for function expressions introduced in ES6.

// 10. What are template literals?
const greeting = `Hello, ${name}!`; // Strings that allow embedded expressions using `${}`.

// 11. How do you handle asynchronous operations in JavaScript?
// Using callbacks, promises (`.then`), or async/await syntax.

// 12. What is the DOM?
// The Document Object Model is a tree structure that represents the content of a web page and allows manipulation of it.

// 13. How do you select an element from the DOM?
document.querySelector('#id'); // Selects an element by CSS selector.
document.getElementById('id'); // Selects an element by ID.

// 14. How do you add an event listener to an element?
const button = document.querySelector('button');
button.addEventListener('click', () => console.log('Clicked!'));

// 15. What is the difference between `null` and `undefined`?
// `null`: Represents an intentional absence of value.
// `undefined`: Represents an uninitialized variable or missing value.

// 16. What is an array in JavaScript?
const numbers = [1, 2, 3, 4]; // An ordered collection of values.

// 17. How do you add elements to an array?
numbers.push(5); // Adds at the end.
numbers.unshift(0); // Adds at the start.

// 18. How do you remove elements from an array?
numbers.pop(); // Removes from the end.
numbers.shift(); // Removes from the start.

// 19. How do you iterate over an array?
numbers.forEach(num => console.log(num)); // Using forEach loop.

// 20. What is a JavaScript object?
const person = { name: 'John', age: 30 }; // A collection of key-value pairs.

// 21. How do you access properties in an object?
console.log(person.name); // Dot notation.
console.log(person['age']); // Bracket notation.

// 22. What is destructuring in JavaScript?
const { name, age } = person; // Extracting properties from objects or arrays.

// 23. What is a spread operator?
const nums = [1, 2, 3];
const newNums = [...nums, 4]; // Used to spread elements of an array or object.

// 24. What is a rest parameter?
function sum(...args) {
    return args.reduce((total, num) => total + num, 0);
} // Collects arguments into an array.

// 25. What is a promise?
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Done'), 1000);
}); // Represents an eventual result of an asynchronous operation.

// 26. What is the `this` keyword?
// `this` refers to the current execution context in JavaScript.

// 27. What is the difference between call, apply, and bind?
// - `call`: Invokes a function with a given `this` value and arguments.
// - `apply`: Same as call, but takes arguments as an array.
// - `bind`: Returns a new function with a specific `this` context.

// 28. What are JavaScript closures?
function outer() {
    const outerVar = 'Outer';
    return function inner() {
        console.log(outerVar);
    };
} // A function that retains access to its parent’s scope even after the parent has closed.

// 29. What is the difference between synchronous and asynchronous code?
// Synchronous: Executes line by line.
// Asynchronous: Can execute code while waiting for other operations to complete.

// 30. How do you handle errors in JavaScript?
try {
    throw new Error('Something went wrong!');
} catch (err) {
    console.error(err.message);
} finally {
    console.log('Always executes');
}

// 31. What are JavaScript classes?
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hi, I'm ${this.name}`);
    }
}

// 32. What is the difference between classical and prototypal inheritance?
// Classical: Uses classes (OOP style).
// Prototypal: Uses objects and prototypes (JavaScript's native style).

// 33. What are ES6 modules?
// Import and export features to share code between files.
export const greet = () => console.log('Hello');
import { greet } from './module.js';

// 34. What is a higher-order function?
// A function that takes another function as an argument or returns a function.

// 35. What is an IIFE?
(function () {
    console.log('I run immediately');
})(); // Immediately Invoked Function Expression.

// 36. What is event bubbling and event capturing?
// Bubbling: Events propagate from child to parent.
// Capturing: Events propagate from parent to child.

// 37. What are default parameters in functions?
function greet(name = 'Guest') {
    console.log(`Hello, ${name}`);
}

// 38. How do you create a new array with only the even numbers?
const evens = numbers.filter(num => num % 2 === 0);

// 39. How do you transform each element in an array?
const squares = numbers.map(num => num * num);

// 40. What is the purpose of the `reduce` method?
const sum = numbers.reduce((total, num) => total + num, 0); // Reduces array to a single value.

// 41. What are JavaScript frameworks?
// Libraries like React, Angular, or Vue.js that simplify building web applications.

// 42. What is the difference between `for...of` and `for...in`?
// `for...of`: Iterates over values of iterable objects.
// `for...in`: Iterates over enumerable properties of objects.

// 43. How do you check if a value is NaN?
Number.isNaN(value);

// 44. How do you convert a string to a number?
const num = Number('42'); // Or parseInt('42') or parseFloat('42.5');

// 45. What is the difference between synchronous and asynchronous JavaScript?
// Synchronous: Code executes sequentially.
// Asynchronous: Code does not block the main thread (e.g., setTimeout).

// 46. How do you delay execution of code?
setTimeout(() => console.log('Delayed'), 1000);

// 47. How do you repeatedly execute code?
setInterval(() => console.log('Repeating'), 1000);

// 48. How do you stop a timeout or interval?
const id = setTimeout(() => {}, 1000);
clearTimeout(id); // Stops timeout.
clearInterval(id); // Stops interval.

// 49. What is a symbol in JavaScript?
// const sym = Symbol('unique'); // A unique and immutable primitive value.

// 50. What are WeakMap and WeakSet?
// WeakMap: Similar to Map but holds "weak" references.
// WeakSet: Similar to Set but holds "weak" references.

// 1. What is the difference between shallow and deep cloning?
const shallowClone = { ...original }; // Shallow clone copies only top-level properties.
const deepClone = JSON.parse(JSON.stringify(original)); // Deep clone copies nested properties.

// 2. How do you handle deep cloning of objects containing circular references?
// Use libraries like Lodash's `cloneDeep` or structured cloning in modern browsers.

const deepCloneCircular = structuredClone(original);

// 3. What is the JavaScript event loop?
// The mechanism that handles execution of multiple chunks of code by prioritizing tasks and callbacks (e.g., macrotasks and microtasks).

// 4. What are microtasks and macrotasks?
// Microtasks: Promise callbacks, MutationObserver.
// Macrotasks: setTimeout, setInterval, setImmediate.

// 5. Explain the difference between `Object.freeze` and `Object.seal`.
// `Object.freeze`: Prevents all changes.
// `Object.seal`: Prevents adding/removing properties but allows modifications of existing ones.

// 6. How do you compare objects in JavaScript?
JSON.stringify(obj1) === JSON.stringify(obj2); // Inefficient but works for shallow comparison.
function deepEqual(a, b) {
    return JSON.stringify(a) === JSON.stringify(b); // Use recursive checks for deep comparison.
}

// 7. What is a generator function?
function* generator() {
    yield 'Hello';
    yield 'World';
} // Functions that return an iterator and can pause execution using `yield`.

// 8. What is the `Reflect` API in JavaScript?
// A built-in object that provides methods for interceptable JavaScript operations.
Reflect.ownKeys(obj); // Returns all property keys (including symbols).

// 9. What is Proxy in JavaScript?
const proxy = new Proxy(targetObject, handler); // Intercepts operations like getting or setting properties.

// 10. How does `async/await` work internally?
// `async` functions return a Promise. `await` pauses execution until the Promise resolves or rejects.

// 11. How do you handle multiple promises concurrently?
Promise.all([promise1, promise2]); // Resolves when all promises resolve.
Promise.race([promise1, promise2]); // Resolves/rejects with the first promise.

// 12. What is the difference between `Promise.all` and `Promise.allSettled`?
// `Promise.all`: Fails if any promise fails.
// `Promise.allSettled`: Resolves with an array of outcomes for all promises.

// 13. How do you create an observable object in JavaScript?
// Use Proxy to observe changes.
const observable = new Proxy(target, {
    set(target, key, value) {
        console.log(`${key} set to ${value}`);
        target[key] = value;
        return true;
    },
});

// 14. What are Symbols in JavaScript?
const sym = Symbol('description'); // Unique and immutable, often used as property keys.

// 15. How do you handle memory leaks in JavaScript?
// Avoid retaining references to unused objects (e.g., use WeakMap/WeakSet for cache).

// 16. What is the difference between `document.createElement` and `innerHTML`?
// `createElement`: Safer, prevents XSS.
// `innerHTML`: Faster but prone to XSS vulnerabilities if user input is not sanitized.

// 17. How do you debounce a function?
function debounce(func, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

// 18. What is throttling?
function throttle(func, limit) {
    let lastFunc, lastRan;
    return function (...args) {
        if (!lastRan) {
            func.apply(this, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(() => {
                if (Date.now() - lastRan >= limit) {
                    func.apply(this, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
}

// 19. What is currying in JavaScript?
const add = a => b => c => a + b + c;

// 20. What are WeakRefs and FinalizationRegistry?
// `WeakRef` provides a way to refer to an object without preventing it from being garbage-collected.
// `FinalizationRegistry` registers a callback to run after an object is garbage-collected.

// 21. Explain the `Map` and `WeakMap` difference.
// `Map`: Allows strong references to keys and values.
// `WeakMap`: Keys must be objects and are weakly held.

// 22. How does optional chaining (`?.`) work?
console.log(obj?.property?.subproperty); // Accesses properties safely without throwing errors.

// 23. What is a module namespace object?
// A read-only object representing all the exports of a module.
import * as allExports from './module.js';

// 24. What is the difference between `module.exports` and `exports`?
// In Node.js, `module.exports` is the actual export object, whereas `exports` is a shorthand reference.

// 25. What are mixins?
// Reusable code that can be added to classes without using inheritance.
const mixin = {
    greet() {
        console.log('Hello');
    },
};
Object.assign(Class.prototype, mixin);

// 26. What are tagged templates?
function tag(strings, ...values) {
    console.log(strings, values);
    return 'Tagged result';
}
tag`Hello ${name}, you are ${age} years old.`;

// 27. How does event delegation work?
// Use a single event listener on a parent to handle events for its child elements.

document.body.addEventListener('click', e => {
    if (e.target.matches('.button')) {
        console.log('Button clicked');
    }
});

// 28. What are service workers?
// Background scripts for web applications enabling offline access, caching, and push notifications.

// 29. How do you implement a promise-based retry mechanism?
function retryPromise(promiseFn, retries) {
    return promiseFn().catch(err => (retries > 0 ? retryPromise(promiseFn, retries - 1) : Promise.reject(err)));
}

// 30. What is `import.meta`?
// Metadata about the current module (e.g., URL or environment-specific information).

// 31. What is the purpose of `Object.defineProperty`?
Object.defineProperty(obj, 'prop', {
    value: 42,
    writable: false,
    enumerable: true,
    configurable: true,
});

// 32. What is the `WeakSet`?
// const ws = new WeakSet();
// const obj = {};
ws.add(obj); // Holds weak references to objects.

// 33. What are Typed Arrays?
// Used for binary data in JavaScript (e.g., Uint8Array, Float32Array).

// 34. What are async iterators?
// Asynchronous iteration over a sequence of Promises.
for await (const val of asyncIterable) {
    console.log(val);
}

// 35. What is the difference between `new Array(5)` and `[undefined, undefined, undefined, undefined, undefined]`?
// `new Array(5)`: Creates an array with empty slots.
// `[undefined...]`: Fills with `undefined` values explicitly.

// 36. How does `Intl` API work in JavaScript?
const formatted = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(1234.56);

// 37. How do you polyfill a feature?
// Check for feature existence and define it if missing.
if (!String.prototype.includes) {
    String.prototype.includes = function (search) {
        return this.indexOf(search) !== -1;
    };
}

// 38. What is `requestAnimationFrame`?
// A method to schedule updates in sync with screen refreshes for animations.

// 39. What is the Temporal API?
// (Experimental) A modern date/time API for JavaScript.

// 40. What is tree-shaking?
// A technique to remove unused code during bundling, relying on ES6 module static analysis.

// 41. How does `performance.now()` differ from `Date.now()`?
// `performance.now()`: High-resolution timer for measuring precise intervals.
// `Date.now()`: Returns the current timestamp.

// 42. How do you memoize a function?
const memoize = fn => {
    const cache = {};
    return function (...args) {
        const key = JSON.stringify(args);
        if (!cache[key]) {
            cache[key] = fn(...args);
        }
        return cache[key];
    };
};

// 43. What is an event loop phase?
// Different stages like timers, pending callbacks, idle, I/O, close callbacks, etc.

// 44. How do you detect JavaScript runtime (browser vs Node.js)?
const isBrowser = typeof window !== 'undefined';
const isNode = typeof process !== 'undefined' && process.versions?.node;

// 45. What are function decorators?
// Higher-order functions that wrap another function to modify its behavior.

// 46. How do you measure execution time of a function?
console.time('Timer');
fn();
console.timeEnd('Timer');

// 47. What is the difference between `arguments` object and rest parameters?
// `arguments`: Array-like object of all arguments.
// `rest parameters`: Real array of explicitly declared arguments.

// 48. What is the purpose of `Object.fromEntries`?
// Converts an array of key-value pairs into an object.
const obj = Object.fromEntries([['key', 'value']]);

// 49. What are async generator functions?
async function* asyncGenerator() {
    yield await Promise.resolve(1);
}

// 50. What is a WeakRef?
// A way to reference objects without preventing garbage collection.

const weakRef = new WeakRef(someObject);
