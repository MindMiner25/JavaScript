// PROBLEM :-
// How does this code works?

function makeCounter () {
    let count = 0;

    return function () {
        return count++;
    }
}

let counter = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1
alert( counter() ); // 2

// How? What is going on with the variable here?



// Lexical Environment => hidden object in every 
// running function
// code block {...}
// script as a whole

// The Lexical Environment object consists of two parts:
// 1. Environment Record => an object that stores all local variables as its properties.
// 2. A reference to outer Lexical Environment.

// PROBLEMS
// Write function sum that works like this: sum(a)(b) = a+b.

function sum (a) {
    return function (b) {
        alert(a + b);
    }
}

sum(8)(7);

// We’ve got an array of objects to sort:

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

// So, instead of writing a function, just put byField(fieldName).

function byField (st) {
    return (a,b) => a[st] > b[st] ? 1 : -1;
}

users.sort(byField('name'));
users.sort(byField('age'));

for (let element of users) {
    alert(element.name);
}

// The following code creates an array of shooters.
// Every function is meant to output its number. But something is wrong…

function makeArmy() {
    let shooters = [];
  
    let i = 0;
    while (i < 10) {
      let value = i;
      let shooter = function() { // create a shooter function,
        alert( value ); // that should show its number
      };
      shooters.push(shooter); // and add it to the array
      i++;
    }
  
    // ...and return the array of shooters
    return shooters;
}
  
let army = makeArmy();

army[0]();