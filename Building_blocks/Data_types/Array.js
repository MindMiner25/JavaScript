// Array methods

// How to delete an element from the array?

let f1_teams = ["Mclaren", "ferrari", "RBPT", "Renault", "Aston Martin", "Alpine"];
alert(f1_teams);

// Remove "Renault" from the team list.
// array is an object at core => we can use "delete" to remove "Renault"

delete f1_teams[3];

alert(f1_teams); // Mclaren,ferrari,RBPT,,Aston Martin,Alpine

// The element is removed but the array still has 6 elements.

// In arrays we want the rest of the elements to shift and occupy the freed-space.

// splice(start_pos, delete_count, e1, e2, ..., en) => returns an array of removed elements can:
// insert
// remove
// replace

f1_teams.splice(3, 1);

alert(f1_teams);

// Add "Williams", "Alpha Tauri", "HaaS" at 3rd position in the team list

f1_teams.splice(3,0,"Williams", "Alpha Tauri", "Haas");

alert(f1_teams);

// Replace 3rd team from the end with "Hass-Ferrari".

f1_teams.splice(-3,1,"Hass-Ferrari");

alert(f1_teams);

// start_pos can be negative.

// slice(start_pos, end_pos) => returns a copy of the subarray from [start_pos, end_pos)
// ***** start_pos < end_pos

// Merging 
// arr.concat(arr1, arr2, arr3) => copies elements of arr, arr1, arr2 and arr3 ,merges then and return a merged array.

let arr = [1,2,3];

alert(arr.concat([4,5],[6,7,8],[9,10]));

// If array-like objects are passed as arguments then concat() just copies that object.

let obj = {
    0 : "element-1",
    1 : "element-2",
    length : 2,
}

alert(arr.concat(obj));

// To copy and merge the elements of array-like objects
// set "Symbol.isConcatSpreadable" property to "true".

obj[Symbol.isConcatSpreadable] = true;

alert(arr.concat(obj));

// Iteration => forEach => allows to run a function for each element of the array.

arr.forEach((item,index,array) => {alert(`${item} is at ${index} in ${array}`)});

// Searching 

// indexOf(item, from) => searches item from index = from and returns the index where it was found otherwise -1.
// lastIndexOf()
// includes(item, from) => searches item from index = from and returns true if found.

// ***** indexOf() uses strict equality check.

// ***** PROBLEM
// If we have an array of objects. Then how would we find an object with specified condition.

let users = [
    {id: 1, name: "Sudhanshu"},
    {id: 2, name: "sudhanshu"},
    {id: 3, name: "sUdhanshu"},
]

// find(func) => if condition is met then object is returned otherwise undefined is returned.

let user = users.find((item, index, array) => {return item.id == 1 });

alert(user.name);




