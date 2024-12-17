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

// find(func) => if true is returned item is returned otherwise undefined is returned.

let user = users.find((item, index, array) => {return (item.id == 1)});

alert(user.name);

// filter() => returns an array of objects satisfying the specified condition.

let user2 = users.filter((item) => {return (item.id%2 === 1)});

alert(user2);

// Array Transformation

// map(func(){}) => returns an array of results

// PROBLEM :- Return an array of length of each f1 team.

let lengths = f1_teams.map((item) => item.length);

alert(lengths);

// sort(func(){}) => walks the array, compare its elements using the provided function and reorder them.
// ***** The main thing here is to provide a function for comparing elements.

// PROBLEM 
// Sort the given array nums in ascending order.

let nums = [1, 18, 5, 6, 4, 2, 3]

// In the function two elements are compared
// if a > b function needs to return a +ve number.
// if a < b function needs to return a -ve number.

nums.sort((a,b) => {
    // if (a > b) return 1; 
    // if (a == b) return 0;
    // if (a < b) return -1;
    return (a-b); 
})

alert(nums);

// Sort the given array

let countries = ['Österreich', 'Andorra', 'Vietnam'];

countries.sort((a,b) => a.localeCompare(b));

alert(countries);

// reverse() => reverses the order of elements in arr.

// split(delim) => splits the string into individual elements by the delimiter and returns an array of elements.

let str = "I am a Naval Officer";

let a = str.split(" ");

alert(a);

// join(glue) => reverse to split(delim) => returns a string of elements joined by glue.

let joined_str = a.join(" ");

alert(joined_str);

// reduce(func(accumulator, item, index, array) {}, initialVal) => It is used to calculate a single value based on the array.

// PROBLEM :- Find the sum of elements of the given array.

let n = [1,2,3,4,5,6,7,8,9];

alert(n.reduce((sum, curr) => sum + curr), 0);
alert(n.reduceRight((sum, curr) => sum + curr), 0);

// Array.isArray(arg) => checks whether arg is an array or not.

// PROBLEMS
// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.
// That is: removes all dashes, each word after dash becomes uppercased.

let camelize = (str) => {
    return str.split("-").
    map((element, index) => index === 0 ? element : element == "" ? element : element[0].toUpperCase()+element.slice(1)).
    join("");
}

alert(camelize("-webkit---transition"));

// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
// The function should not modify the array. It should return the new array.

let arr2 = [5,3,8,1];

let filterRange = (arr2, a, b) => {
    return arr2.filter((item) => {return (item >= a) && (item <= b)});
}

let filtered = filterRange(arr2, 1, 4);

alert( filtered );
alert(arr2);




