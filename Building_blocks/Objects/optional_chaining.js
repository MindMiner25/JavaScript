// Optional Chaining => "?."

let user = {};

alert(user?.address?.street); 

// O/P => undefined
// Since user has no address.

// "?." => stops or "short-circuits" the evaluation if the left part does not exists.

let User = null;

alert(User?.address?.street);

// O/P => undefined
// Since user is not defined so the evaluation short-circuits.

// **** Do not overuse optional chaining 
// Reason :- Here, in the above example "User" itself was not defined which itself is a programming problem.
// That needs to be rectified. And if we overuse "?." then we may miss this problem.

// "?." also works with functions and square-brackets

// ?.() => is used to call a function that may not exist.
// ?.[] => is used to call properties that may not exist.

let userAdmin = {
    admin : function () {
        alert("Hi this is admin!");
    },
}

let userGuest = {};

alert(userAdmin.admin?.());  // calls userAdmin.admin() is it exists otherwise returns undefined.
alert(userGuest.admin?.());

user.name = "sudhanshu";
user.age = 22;

alert(user?.["name"]);
alert(user?.["isAdmin"]);

// *** "?." => can be used for safe reading and deleting but not writing.




