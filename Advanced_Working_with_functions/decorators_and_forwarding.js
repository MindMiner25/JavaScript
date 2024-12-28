// slow(x) => CPU-heavy, produces stable results.

let slow = (x) => {
    // CPU-intensive job here.

    alert(`Called with ${x}`);
    return x;
}

// Since, the function produces stable results, the results can be remembered or cached
// to avoid spending extra-time on re-calculations.

// But instead of adding this functionality to the slow(x).
// we'll create a wrapper function that adds caching.

// Creating a Decorator-function

function cachingDecorator (func) {
    let cache = new Map();

    return function (x) {
        if (cache.has(x)) return cache.get(x);

        let result = func(x);

        cache.set(x,result);
        return result;
    };
};

// Modifying the behaviour of the function

slow = cachingDecorator(slow);

alert(slow(1));
alert(slow(1));

// Decorating object-methods

// 1. call(context,arg1,arg2,...)

let worker = {
    someMethod () {
        return 1;
    },

    slow (x) {
        alert("Called with "+x);
        return x * this.someMethod();
    },
}

function methodCaching (func) {
    let cache = new Map();

    return function (x) {
        if (cache.has(x)) return cache.get(x);

        let result = func.call(this,x);

        cache.set(x,result);
        return result;
    };
}

worker.slow = methodCaching(worker.slow);

alert(worker.slow(2));

// multiargument decorator.

// How to cache the multi-argument method?

worker.multiSlow = function (x,y,z) {
    alert(`Called with ${x},${y},${z}`);
    return x+y+z
};

// 1. How to save a result for a pair/combination of arguments?
// Like (x,y,z) -> result.

// SOLUTIONS :-
// 1. Implement a new map-like Data Structure that is more veratile and allows multi-keys.
// 2. Use nested maps => x -> {y -> {z -> result}}.
// Join two values into one => (x,y,z) == "x,y,z". ---> Recommended

function multiArgumentCachingDecorator (func,hash) {
    let cache = new Map();

    return function () {
        let key = hash(arguments);

        if (cache.has(key)) return cache.get(key);

        let result = func.call(this,...arguments);

        cache.set(key,result);
        return result;
    };
};

function hash (arguments) {
    // method-borrowing
    return [].join().call(arguments);
};

worker.multiSlow = multiArgumentCachingDecorator(worker.multiSlow,hash);

alert(worker.multiSlow(3,4,5));
alert(worker.multiSlow(3,4,5));




