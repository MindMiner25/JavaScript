"use strict" // enables modern logic to the script
// Later on when we use classes and objects we will omit "use strict".

// CORE BUILDING BLOCKS OF JS
// 1. Variables
// 2. Data Types

// Variable --> A container or block of memory that holds data for usage and manipulation.
// TYPES :-
// 1. var   --  older NOT RECOMMENDED
// 2. let   --  block-scoped, generally used
// 3. const --  constant

// Why var is not recommended ?
// var is "function-scoped" which can lead to unintended behaviour whereas let and const are block-scoped, i.e. they only exist within the "{...}" when defined.

// DATA TYPES

// String : Text --> data enclosed in '' or " ".

let userName = "Sudhanshu Patel";

// Number : Any real number

let userID = 21121084

// boolean : true / false

let loggedIn = true;

// Object : key --> value

let account = {name : userName, ID : userID};

// Array : A list of items
// Array is an object data-type.

let productsOrdered = [1, 2, 4, 6, 7];

// null : explicitly set to be empty
// null is also an object data-type

let nothing = null;

// Undefined : A variable that has been declared but not yet assigned a value.
// undefined is an undefined data-type 

let undef_variable;

// TYPE CHECKING

console.log(typeof userName);
console.log(typeof userID);
console.log(typeof loggedIn);
console.log(typeof account);
console.log(typeof productsOrdered);
console.log(typeof nothing);
console.log(typeof undef_variable);

// PROBLEM STATEMENT
// Declare variables and store that information of a Google Account's info page that shold not change and the info that is allowed to change.

// unalterable data
// _email
// _phone

const _email = "spatel084XXXXX.com";
const _phone = "747XXXX851";

// alterable data
// _name
// _birthday
// _gender

let _name = "Sudhanshu Patel";
let _birthday = "DDMMYYYY";
let _gender = "Male";
let _isStudent = true;
let _city = "Renukoot";

console.log(_email, "\n", _phone,"\n", _name,"\n", _birthday,"\n", _gender,"\n", _isStudent,"\n", _city);

// There is a widespread practice to use constants as aliases for "difficult-to-remember" values that are known before execution.

const COLOR_RED = "#F00";

let color = COLOR_RED;

alert(color);