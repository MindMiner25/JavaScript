// Objects are used to store keyed collections of various data and more complex entities.

// Objects can be created using one of the two syntaxes

// Object constructor syntax
// let user = new Object();

// Object literal syntax
let User = {
    name : "Sudhanshu",
    age : "22",
};

// The key-value pairs represents the property of the object.

// From here onwards consider object as a "Cabinet" and its properties as "files" in the cabinet.

// Like any other file, we can create, remove and read files from the cabinet at any time.

// "CRUD operations"

// Reading file

alert(User.name);

// Creating a file

User.isAdmin = true;
alert(User.isAdmin);

// --multiword file
User["have friends"] = true;
alert(User["have friends"]);

// Removing a file

delete User.age;

// Computed properties

let fruit = prompt("Enter a fruit : ", " ");

user[fruit + "computers"] = 5;

alert(user.applecomputers);

// Property value shorthand

// *** In real code we often use existing variables as values for property names.







