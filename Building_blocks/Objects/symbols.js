// Symbol => unique identifier/primitive unique value

// Where symbols are used ?

// In objects the keys can either be:
// 1. strings
// 2. symbols
// rest all other values are converted to strings

// Creating a symbol and giving it a description

// A value of type symbol can be created using Symbol().
// Upon creation, we can also give symbols a symbol name or label

let symbol = Symbol("id");

// "id" is just a label and can be same for multiple identifiers.

let id1 = Symbol("id");
let id2 = Symbol("id");

alert(id1 == id2);   // Symbols are guaranteed to be unique.

// description/labels are useful in debugging

// What is the use of symbols?

// Symbols are fundamentally different from strings and do not auto-convert to strings.
// Symbols allows us to create such properties of an object that cannot be accidently accessed or overwrite => "hidden properties".

let user = {
    "name" : "sudhanshu",
    "surname" : "patel",
    "age" : 21,
} // It is a third party code

// So we cannot add other fields to it
// But if we want to have our own identifier then we can add it using symbol => which will render the property as hidden-property.

let id = Symbol("user_id");

user[id] = 21121084;

// Symbolic properties are skipped by for..in loop => symbolic properties cannot br accessed accidently.

// Object.assign(des, ...sources) copies both string and symbol properties.







