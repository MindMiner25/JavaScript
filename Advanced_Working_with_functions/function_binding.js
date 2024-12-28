// Losing "this" => When a method is passed somewhere separately from the object -- "this" is lost.

let user = {
    name : "Sudhanshu",
    quote () {
        alert(  `Be Attractive ft. ${this.name}` );
    },
}

// Lets schedule user's quote.

let f = user.quote;
f();                   // user_name is lost. => this = undefined
setTimeout(f,2000);    // user_name is lost. => this = window

// PROBLEM
// We want to pass an object-method as an argument. But the problem is that the call is not being made in the right context.
// How to ensure that the call is made in the right context.

// SOLUTION

// 1. Using a wrapping function

function wrapper () {
    user.quote();
}

setTimeout(wrapper,4000);

// But this approach is not DYNAMIC.

// 2. bind => a built-in method that allows to fix this.
// func.bind(context) => returns a function, sets this = context.
// *** context cannot be omitted.

setTimeout(user.quote.bind(user),6000);

// Partial Functions => functions created by fixing some parameters of the existing function.

let existingFunction = (a,b) => a*b;

let partialFunction = existingFunction.bind(null,2);

alert(partialFunction(3));
alert(partialFunction(4));







