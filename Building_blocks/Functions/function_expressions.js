// Formal Definition
// As a function is created in the context of an assignment expression, this is called a function expression.

// Function Expession --> It is a way to create a function in the middle of an expression.

// Function-Declaration

function sum (a = 9, b = 8) {
    return a + b;
}

// Function-Expression

let Sum = function (a = 9, b = 8) {
    return a + b;
};

console.log(Sum());

// JS treats function as a "value".
// Try this!

alert(sum);
alert(Sum);

// the string representation of the source code is displayed just like a value.
// So we can do all the operations that we are allowed to do with a value.

// copying

let SUM = Sum;

alert(SUM);

// Callback Functions
// using function as an argument

function ask (question, yes, no) {
    if (confirm(question)) yes();
    else no(); 
}

function showOk () {
    alert("You Agreed. ");
}

function showCancel () {
    alert("You cancelled the execution. ");
}

ask("Do you agree", showOk, showCancel);

// showOk, showCancel --> callbacks

// We can use function expression to write an equivalent shorter function

ask(
    "Do you Agree ? ",
    function () {alert("You Agreed. ")},
    function () {alert("You Cancelled the execution. ")}
)

// the function above inside ask(...) are called anonymous.
// Such functions are not accessible oustside of ask because they are not assigned to variables.

// Functions can be perceived as actions just as the strings and numbers are perceived as data.





