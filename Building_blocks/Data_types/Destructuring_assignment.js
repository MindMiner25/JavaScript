// Destructuring assignment => A shorter way to assign each element a variable

let arr = ["Sudhanshu","Patel"];

// let firstname = arr[0];
// let lastname = arr[1];
// the shorter way

let [firstname, lastname] = arr;

alert(`${firstname} the ${lastname}`);

// Ignoring elements using ","

let f1 = ["RBPT","Ferrari","HaaS","McLaren","Williams","Aston Martin"];

let [black,red,,orange] = f1;

alert(`${black} ${red} ${orange}`);

// Works with any iterable

let [a,b,,,c] = "National"

alert(`${a} ${b} ${c}`);

// Swapping variables

let colors = ["red","blue","green"];

let [c1,,c2] = colors;

alert(`${c1} ${c2}`);

[c2,c1] = [c1,c2];

alert(`${c1} ${c2}`);

// ...rest => gets the rest of the array 
// must be at the last in the desctructuring assignment.

let [name1, name2, ...rest] = ["Verstappen","Norris","Leclerc","Sainz","Russel","Hamilton"];

alert(rest);

// absent/missing values are considered undefined

let [A, B] = [];

alert(A);
alert(B);

// Default values => expressions or call-back functions evaluted only if the value is missing.

let [fname = prompt("name?"," "), surname = "Patel"] = ["Utkarsh"];

alert(`${fname} ${surname}`);

// object destructuring








