// Arrays => special Data Structure used to store ordered collections of values.

// *** An array can store elements of any type.
// For instance

let arr = ["Apple", {name:"Sudhanshu"}, function () {alert("Hi!!")}];

arr[2]();

// Accessing elements => arr.at(i) --> negative i is allowed (reads elements from end);

// *** Arrays in JS can work as both queue and stack => Arrays in JS --> deque
// Array Methods 
// pop() => extracts the last element of the array and returns it
// push() => Append an element to the end of the array
// shift() => Extracts the first element of the array and returns it.
// unshift() => Appends an element to the beginning of the array.

// push() and unshift() can add multiple elements at once.

// **** An array is an object at core => it is copied by reference.

// shift(), unshift() => slow
// WHY??
// because such methods require to renumber the elements to the right after each operation.

// pop(), push() => fast

// Iteration => for..of

for (let element of arr) {
    alert(element);
}

// Since arrays are objects at core. So we can use for..in loop => but that a bad practice
// 1. It is optimized for objects, and is 10-100 times slower than for..of.
// 2. There are array-like objects, that is they have length and indexes alongwith properties and methods, which we usually don't need. But for..in will list them though.

// length = greatest numeric index + 1.
// length != count of values in the array.

let fruits = [];
fruits[123] = "apple";

alert(fruits.length); //124

// *** length is writable

let numbers = [1,2,3,4,5];

alert(numbers.length);

// If length is decreased => array is truncated.
numbers.length = 3;
alert(numbers);

// If length is increased => array then contains empty elements.
numbers.length = 5;
alert(numbers);

// ***** The simplest way to clear an array => arr.length = 0

numbers.length = 0;
alert(numbers);

// Another way to create an array

let num = new Array(1,2,3,4);
alert(num);

// But using this syntax is considered a bad practice 
// For instance

let num1 = new Array(2);
alert(num1); 

// returns an array holding two undefined elements 
// The syntax do not implements as intended in case of a single element.

// Conversion toString
// Arrays have their own implementation of toString() method
// String(array) => returns comma-separated list of elements

let arr1 = [1,2,3];
alert(String(arr1)); // "1,2,3"

// Arrays do not have Symbol.toPrimitive()

alert( [] + 1);
alert( [1,2] + 4);

// Arrays only implement toString(). So, 
// [] + 1 => "" + 1 = "1"
// [1,2] + 1 => "1,2" + 1 = "1,21"

// ***** Do not compare array with ==

// Create an array styles with items “Jazz” and “Blues”.
// Append “Rock-n-Roll” to the end.
// Replace the value in the middle with “Classics”. Your code for finding the middle value should work for any arrays with odd length.
// Strip off the first value of the array and show it.
// Prepend Rap and Reggae to the array.

let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[(styles.length+1)/2 - 1] = "Classics"
styles.shift();
styles.push("Rap", "Raggae");
alert(styles)

// Write the function sumInput() that:

// Asks the user for values using prompt and stores the values in the array.
// Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
// Calculates and returns the sum of array items.

function sumInput () {
    let arr = [];

    let ip;

    while (true) {
        ip = prompt("Enter a number : ", " ");
        
        if (ip === " ") break;
        if (ip === null) break;
        if (!isFinite(ip)) break;

        arr.push(ip);
    }

    let sum = 0;

    for (let num of arr) {
        sum += +num;
    }

    return sum;
}

alert(sumInput())


