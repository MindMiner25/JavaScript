// Weakmap -> does not prevent garbage collection of key objects.

// Use Case

// 1. Additional Data

// PROBLEM :- 
// Suppose we are storing the visits of our registered users using a map.
// Meanwhile, one of our used unregisters himself. So his data has no meaningful use.
// We don't need his visits data anymore. Therefore delete his data.

let john = {name:"john"};

let numberVisited = new Map();

let countVisit = (user) => {
    let counts = numberVisited.has(user) ? numberVisited.get(user) : 0;
    numberVisited.set(user,counts+1);
};

countVisit(john);

alert(numberVisited.get(john));

// John unsubscribes

john = null;

alert(numberVisited.get(john));

// Still John's data is accessible 
// Lets there be another user "Mary" with the same case
// Use WeakMap for ADDITIONAL DATA

let numVisited = new WeakMap();

let visitCounts = (user) => {
    let counts = numVisited.get(user) || 0;
    numVisited.set(user,counts+1);
}

let Mary = {name:"Mary"};

visitCounts(Mary);

alert(`${Mary.name} visits ${numVisited.get(Mary)} times`);

Mary = null;

alert(`${Mary.name} visits ${numVisited.get(Mary)} times`); // No output

// Mary's visits data is deleted.

// 2. Caching


