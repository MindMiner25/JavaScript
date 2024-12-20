// ...rest => gather remaining parameters in an array.
// ...rest must at the end in the parameters list.

let f = (a,b,...remArgs) => {
    alert(a);
    alert(b);
    alert(remArgs);
}

// A function can be called with any number of arguments.
f(1,2,3,4,5,6,7,8,9);

// spread syntax => expands an array into a list of arguments.

let arr = [1,2,3,4,5,6,7,8,9];

alert(Math.max(...arr)); // 9

// Merging arrays

let arr1 = [1,2,3];
let arr2 = [4,3,5];
let arr3 = [9,0,-3];

let res = [...arr1,...arr2,...arr3];

alert(res);

// Converting string/iterables => array
// 1. Array.from() => works with array-like objects and iterables.
// 2. ***** ...spread. => only work with iterables.

let str = "Hello";

let res2 = [...str];

alert(res2);

// Copying Arrays
// splice()
// slice()
// *** [...spread]

let arr4 = [1,7,0,7];

let copy_arr4 = [...arr4];

alert(copy_arr4);

// Copying Objects
// Object.assign(dest,src1,src2,....,srcn)
// structuredclone()
// *** {...spread}

let student = {
    name: "Sudhanshu",
    roll_no: 21121084,
    course: "B-Tech",
    branch: "Mining Engineering",
}

let copy_student = {...student};

for (let key in copy_student) {
    alert(`${key} : ${copy_student[key]}`);
}






