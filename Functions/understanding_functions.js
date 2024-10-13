// PROBLEM STATEMENT 
// Find the multiplication of two numbers a and b without using *-operator
// Find the result applying all possible functions in JS.

// INTUITION :-
// a = e^ln(a)
// b = e^ln(b)
// product = a*b = e^(ln(a)+ln(b)).

// APPROACH
// 1. Find the natural log of a and b.
// 2. Take sum
// 3. Evaluate anti-log of sum.

// BASIC SYNTAX

function sum(a, b) {
    const sum = a + b;
    return sum;      // If noting is returned then the function returns undefined.
}

console.log("Basic Function : ",sum(5,6));

// ANONYMOUS FUNCTION

var sum = function (a, b) {
    const sum = a + b;
    return sum;      
}

console.log("Anonymos Function : ",sum(7, 11));

// IIFE --> Immediately Invoked Function Expression
// IIFE's are helpful in delibrate scoping of variables.

var sum = (function(a, b){
    const sum = a + b;
    return sum;
})(3, 5)

console.log("IIFE : ", sum)

// Function within Functions

