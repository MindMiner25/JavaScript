// new Function => rare way to create a function.

// new Function ([arg1,arg2,arg3], functionBody)

let sum = new Function("a","b","return a+b");

alert(sum(7,8));

// Use Case :- We can create a function from the code from server (which is string) and then execute it.

// [[Environment]] -> global Lexical Env.


