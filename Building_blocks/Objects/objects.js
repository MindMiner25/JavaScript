// objects are used to store 
// 1. keyed collections of various data 
// 2. more complex entities.

// Object "constructor" syntax
let user = new Object();

// object "literal" syntax
let User = {};

// There are no limitations on properties name.

// Property Existence Test

user["name"] = "Sudhanshu";
user["age"] = 30;

// "string" in obj

alert("age" in user);
alert("isAdmin" in user);

// There should be a string to the left of in otherwise the exact name without quotes would be tested.

// for..in loop => special construct to walk over all the keys of an object.

for (let key in user) {
    alert(key);
    alert(user[key]);       // Square bracket notation allow taking the key from a variable.
}

// order of properties 
// 1. if the keys are integers => the properties are arranged in ascending order of the integers

let CountryCodes = {
    "41" : "Germany",
    "91" : "India",
    "92" : "Pakistan",
    "7" : "Russian Federation",
    "1" : "USA",
}

for (let code in CountryCodes) {
    alert(code);
    alert(CountryCodes[code]);
}

// 2. If the keys are non-integers => the properties are arranged as per the order of creation.

// Objects are associative arrays with several special features.

/*Write the code, one line for each action:

Create an empty object user.
Add the property name with the value John.
Add the property surname with the value Smith.
Change the value of the name to Pete.
Remove the property name from the object.*/

let _user = {};     // Usually preferred

_user["name"] = "John";
_user["surname"] = "Smith";

_user["name"] = "Pete";
delete user.name;

// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

function isEmpty (obj) {
    for (let key in obj) {
        return false;
    }
    return true;
};

alert(isEmpty(_user));

// We have an object storing salaries of our team:
// Write the code to sum all salaries and store in the variable sum.

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let sum = 0

for (let emp in salaries) {
    sum += salaries[emp];
}

alert(sum);

// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric (obj) {
    for (let key in menu) {
        if (typeof(menu[key]) == 'number') {
            menu[key] = 2 * menu[key];
        }
    }
};

multiplyNumeric(menu);

for (let key in menu) {
    alert(menu[key]);
}

// There is a salaries object with arbitrary number of salaries.
// Write the function sumSalaries(salaries) that returns the sum of all salaries using Object.values and the for..of loop.
// If salaries is empty, then the result must be 0.

let saLaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

let sumSalaries = (obj) => {
    let sum = 0;

    for (let salary of Object.values(obj)) {
        sum += salary;
    }

    return sum;
};

let SumSalaries = (obj) => Object.values(obj).reduce((sum, salary) => sum + salary, 0);

alert( sumSalaries(saLaries) );

// Write a function count(obj) that returns the number of properties in the object:

let usEr = {
    name: 'John',
    age: 30
};

let count = (user) => Object.keys(user).length;

alert( count(usEr) );
