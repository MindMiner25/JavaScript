// Set => collection of unique items.

// Methods
// new Set(Iterable) => creates a set.
// set.add(value) => adds value and returns the set itself.

let students = [{name:"Sudhanshu",cpi:8.31},{name:"Sushil",cpi:7.8},{name:"Srijan",cpi:8.31}];

let set = new Set(students);

set.add({name:"Sonu",cpi:8.30});
set.add({name:"Som",cpi:9.10});

set.delete({name:"Som",cpi:9.10});

// set.has(value) => returns true if value is present at the moment of the call, otherwise false
// set.clear() => removes everything from the set.
// set.size => returns element count.

// Let arr be an array.Create a function unique(arr) that should return an array with unique items of arr.

function unique (arr) {
    let set = new Set(arr);
    return Array.from(set);
}

let values = ["Hare", "Krishna", "Hare", "Krishna","Krishna", "Krishna", "Hare", "Hare", ":-O"];
  
alert( unique(values) );

// Anagrams are words that have the same number of same letters, but in different order.
// Write a function aclean(arr) that returns an array cleaned from anagrams.

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

let aclean = (arr) => {
    let set = new Set();
    let res = [];
    for (let element of arr) {
        let st = Array.from(element.toLowerCase()).sort((a,b)=>a.localeCompare(b)).join("");
        if (!set.has(st)) {
            set.add(st);
            res.push(element);
        }
    }
    return res;
};

alert( aclean(arr) );
