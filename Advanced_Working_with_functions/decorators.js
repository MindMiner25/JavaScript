// Decorators and Forwarding

// Decorator => A special function that alters the behaviour of any function.
// Returns a cache-wrapper function => remembers/cache the results of a function call.

// Print nth fibonacci number.

function slow (x) {
    alert(`Called with ${x}`);
    return x;
}

function cachingDecorator (func) {
    // 1. Initialise a map
    let cache = new Map();

    // 2. Return a cache-wrapper function
    return function (x) {
        // If cache has x return it.
        if (cache.has(x)) return cache.get(x);
        // If cache does not have x call the function.
        let result = func(x);
        // Set the result in map
        cache.set(x,result);
        return result;
    };
}

slow = cachingDecorator(slow);

alert(slow(1));
alert(slow(1));

// Working with object-methods
// 1. call(context,arg1,arg2,...) => sets this = context.
// we call sayHi in the context of different objects

function sayHi () {
    alert(this.name);
};

let user = {name : "Sudhanshu"};
let admin = {name : "Utkarsh"};

sayHi.call(user);

function say (phrase) {
    alert(this.name+" : "+phrase);
};

say.call(user,"Good-Morning");

// 2. apply()




