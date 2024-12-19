// Iterable objects => generalization of an array
// It is a concept which allows to make any object usable in for..of loop.

// ***** to make objects iterable => add a built-in method [Symbol.iterator]

let range = {
    from: 1,
    to: 9,
};

range[Symbol.iterator] = function () {
    return {
        current: this.from,
        last: this.to,

        next() {
            if (this.current <= this.last) {
                return {done: false, value: this.current++};
            } else {
                return {done: true};
            }
        },
    };
};  // returns an iterator object

for (let val of range) {
    // for each iteration for..of will call a method in iterator object.
    // the method in turn returns values in an object of the format => {done: ..., value: ...}.
    alert(val);
}

// Here we have created an special iterable object which is not the "range" object.

// We can make the "range" object iterable by returning the "range" object itself for the [Symbol.iterator]() call.

let raNge = {
    from: 1,
    to: 9,

    [Symbol.iterator]() {
        this.current = this.from;
        return this;
    },

    next() {
        if (this.current <= this.to) {
            return {done: false, value: this.current++};
        } else {
            return {done: true};
        }
    }
};

for (let val of raNge) {
    alert(val);
}

// ***** Using the object itself as an iterable object => it is impossible to have 2 * for..of loops running over the object simultaneously.

// Calling an iterator explicitly => gives more control over the process.

let str = "Hello";

let iterator = str[Symbol.iterator]();

while (true) {
    let result = iterator.next();
    if (result.done) break;
    alert(result.value.toUpperCase());
} 

// iterable objects
// Arrays
// Strings 
// coz such objects are usable in for..of loop.

// How can we implement array methods on an object ?

// Array.from(obj, map) => takes an object, ckeck it for being iterable or array-like and copies its elements to an array.

// Implementing array methods on iterables.

let result = Array.from(raNge, (num) => num * 2);

alert(result.slice(3,5));

// Implmenting array methods on strings(array-like objects).

let s = Array.from("sudhanshu", (char) => char.toUpperCase());

alert(s.lastIndexOf("U"));



