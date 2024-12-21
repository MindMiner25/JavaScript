// functions => callable "action-objects".
// Like an object we can :
// add properties
// remove properties

// Useable properties of functions
// 1. name => returns name of the function.

function sayHi() {
    alert("Hi");
}

alert(sayHi.name);

let arr = [()=>{}]; 

// In this case it is impossible to figure out the name of the function.

alert(arr[0].name); // empty string

// 2. Length Property => returns the number of function parameters.

function many (a,b,...rest) {};

alert(many.length); // 2 ??? => rest parameters are not counted.

// Cutom properties

function makeCounter () {

    function counter() {
        return counter.count++;
    }

    counter.count = 0;

    return counter;
}

let counter = makeCounter();

alert( counter() );
alert( counter() );

// NFE => Named Function Expression => term for function expressions that have a name.

let SayHi = function func(who) {
    return `Hello ${who}`;
};

alert(SayHi("Sudhanhsu"));

// Since the function in sayHi() have a name. Thus, sayHi() => NFE

// NFE allows internal self-referencing => function can call itself using the function_name. 
// "func" is not visible outside of the function.

let SayHI = function func(who) {
    if (who) {
        alert(`Hello ${who}`);
    } else {
        func("Abhimanyu");
    }
};

SayHI();

// PROBLEMS 

// Modify the code of makeCounter() so that the counter can also decrease and set the number:

// counter() should return the next number (as before).
// counter.set(value) should set the counter to value.
// counter.decrease() should decrease the counter by 1.

// Using closure

let MakeCounter = function () {
    let counter = 0;

    function Counter() {
        return counter++;
    }

    Counter.set = (value) => counter = value;
    Counter.decrease = () => counter = counter - 1;

    return Counter;
}

let Counter = MakeCounter();

alert( Counter() );
alert( Counter.set(7) );
alert( Counter() );
alert( Counter.decrease() );
alert( Counter() );

// Write function sum that would work like this:
// sum(0)(1)(2)(3)(4)(5) == 15

function Sum(a) {
    Sum.res += a;

    Sum.toString = () => {
        return Sum.res;
    };

    return Sum;
}

Sum.res = 0;

alert(Sum(0)(1)(2)(3)(4)(5))




