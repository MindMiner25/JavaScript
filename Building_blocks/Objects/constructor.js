// PROBLEM :-
// Create 1000 objects resembling each user in terms of name and age.

// We would have to code for each user individually, if we use {...} expression.

// Since, the structure of each user is same. So, is there any way to use that particular structure repetitively for each user.

// "YES", constructor functions and "new" operator allow us to create multiple objects with similar structure, like :
// 1. multiple users
// 2. menu items

// Conventions for constructor functions
// 1. They are named with capital letter first.
// 2. They should be executed only with "new" operator

function User(name, age) {
    this.name = name;
    this.age = age;
}

// *** Constructors do not have a return statement. this is automatically returned. 

let user = new User("Sudhanshu", 22);

// When a function is executed with "new", following steps happen :-
// 1. A new empty object is created and is assigned to "this".
//          this -> {}
// 2. Function body exeutes and "this" is modified.
// 3. The value of "this" is returned (implicitly) 
//          return this

alert(user.name);
alert(user.age);

// ** We are permitted to omit the parenthesis

// PROBLEM :- Create another object structure with actions

function User2 (name, age) {
    this.name = name;
    this.age = age;

    this.greet = function () {
        alert("Hi! My name is " + this.name);
    };
}

let user2 = new User2("Xarvis", 109);

user2.greet();

// To create more complex objects, there are more advanced syntax "classes".

// PROBLEMS

// Is it possible to create functions A and B so that new A() == new B()?

function A() { return user; }
function B() { return user; }

let a = new A();
let b = new B();

alert( a == b ); 

// Yes, it is possible if the constructor functions return the same externally defined object.

// Create a constructor function Calculator that creates objects with 3 methods:

// read() prompts for two values and saves them as object properties with names a and b respectively.
// sum() returns the sum of these properties.
// mul() returns the multiplication product of these properties.

function Calculator () {
    this.read = function () {
        this.a = +prompt("a ?", " ");
        this.b = +prompt("b ?", " ");
    };

    this.sum = function () {
        return this.a + this.b;
    };

    this.mul = function () {
        return this.a * this.b;
    };
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

// Create a constructor function Accumulator(startingValue).

// Object that it creates should:

// Store the “current value” in the property value. The starting value is set to the argument of the constructor startingValue.
// The read() method should use prompt to read a new number and add it to value.
// In other words, the value property is the sum of all user-entered values with the initial value startingValue.

function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function () {
        this.value += +prompt("Enter value : ", " ");
    };
}

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values