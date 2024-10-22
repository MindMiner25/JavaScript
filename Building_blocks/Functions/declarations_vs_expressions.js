// 1. The Syntax
// 2. Most subtle difference is when a function is created by JavaScript Engine.
//    Function Declarations are processed at the initialization stage.
//    while Function Expressions are processed at the execution stage.

sum()

function sum (a = 8, b = 9) {
    alert(a + b);
}

// 3. Function declarations are block-scoped.
//    Function Expressions can be made global-scoped by assigning the function-value to a variable of proper visibility.

// PROBLEM STATEMENT
// Let’s imagine that we need to declare a function welcome() depending on the age variable that we get during runtime.
// And then we plan to use it some time later.

let age = prompt("What is your age ? ", " ");

let welcome;

if (age < 18) {
    welcome = function () {
        alert("Have you asked your parents ?");
    };
}
else {
    welcome = function () {
        alert("Welcome");
    };
}

welcome();






