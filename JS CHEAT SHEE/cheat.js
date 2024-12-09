// Output to console
console.log("Hello, World!"); // Use for debugging or testing output in the browser console

// Variables
let x = 10;  // Block-scoped, mutable; use for values that may change later in the code
const y = 20; // Block-scoped, immutable; use for constants or values that shouldn't change
var z = 30;  // Function-scoped; avoid using `var` in modern code for better scoping control

// Data types
let str = "Hello"; // String: Use for textual data
let num = 42;      // Number: Use for numeric values
let bool = true;   // Boolean: Use for true/false conditions
let undef;         // Undefined: A declared variable not assigned a value
let n = null;      // Null: Represents an intentionally empty value
let arr = [1, 2, 3]; // Array: Use for ordered collections of items
let obj = {key: "value"}; // Object: Use for key-value pairs, representing structured data

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
let numbers = [1, 2, 3, 4];
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
