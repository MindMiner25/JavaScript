// Functions :- building blocks of a script which can be used to perform a task repeatedly.

// Declaration 1 

function sum (a = 5, b = 6) {
    return a + b;
}

console.log(`sum of ${5} and ${6} is ${sum(3, 9)}`);

// check age

function checkAge (age) {
    return ((age > 18) || false);
}

console.log(checkAge(17));