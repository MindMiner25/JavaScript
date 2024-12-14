// Symbol => unique identifier

// Where symbols are used ?

// In objects the keys can either be:
// 1. strings
// 2. symbols
// rest all other values are converted to strings

// Creating a symbol and giving it a description

let symbol = Symbol("id");

// "id" is just a label and can be same for multiple identifiers.

let id1 = Symbol("id");
let id2 = Symbol("id");

alert(id1 == id2);

// description/labels are useful in debugging

