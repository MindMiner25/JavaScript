// JSON => JavaScript Object Notation => general format to represent values and objects.
// JSON is used for "Data Exchange" when client uses JS and server is written on Ruby/PHP/Java.

// methods
// 1. JSON.stringify => converts objects to JSON-encoded object => ENCODING
// 2. JSON.parse => converts JSON back into objects. => DECODING

let student = {
    name: "Sudhanshu",
    age: 22,
    isAdmin: false,
    courses: ["HTML", "CSS", "JS"],
};

alert(JSON.stringify(student)); 

// No coversion to JSON-encoded object takes place if the object includes circular reference.

let boy = {
    name: "Sudhanshu",
    location: "Raipur",
    course: [{major: "Mining Engineering"},{minor: " "}],
}

let girl = {
    name: "Shruti",
    location: "Bengaluru",
    course: [{major: "Computer Science"}, {minor: "Artificial Intelligence"}]
}

boy.sister = girl;
girl.brother = boy;

// objects boy and girl are circular referenced.

// alert(JSON.stringify(girl)); //ERROR as the object is circular referenced.

// To resolve this error => "replace" argument is used in the stringify method.
// replacer => can be
// Array of properties
// mapping function

alert(JSON.stringify(girl,["name", "location", "course"]));

// O/P :- {"name":"Shruti","location":"Bengaluru","course":[{},{}]}
// ***** nested objects are not encoded.

// using mapping function

alert(JSON.stringify(girl,(key,value) => {
    return (key == "sister") ? undefined : value;
}));

// PROBLEMS
// Turn the user into JSON and then read it back into another variable.

// read => "decode"
let user = {
    name: "John Smith",
    age: 35
};

let json = JSON.parse(JSON.stringify(user));


