// Function Expression

let sum = function (a, b) {
    alert(a + b)
}

// Arrow Functions :- Shorter version of function expressions

let Sum = (a, b) => alert(a + b);

// Multiline Arrow Functions

let SUM = (a, b) => {
    c = 5;
    return (a + b) * c;
}

// Replace Function Expressions with arrow functions in the code below:

// function ask(question, yes, no) {
//     if (confirm(question)) yes();
//     else no();
// }

// ask(
// "Do you agree?",
// function() { alert("You agreed."); },
// function() { alert("You canceled the execution."); }
// );

let Ask = (question, yes, no) => confirm(question) ? yes() : no();

Ask(
    "Do you agree?",
    () => alert("You agreed Arrow."),
    () => alert("You cancelled the execution Arrow.")
)
