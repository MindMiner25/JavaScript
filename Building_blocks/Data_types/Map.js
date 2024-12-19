// Map => collection of keyed data items
// Similar to objects but allows keys of any type.

// Methods

let map = new Map();

map.set("1", "Sudhanshu");
map.set(1,"Verstappen");
map.set(true,"Vettel");

alert(map.get(1));
alert(map.get("1"));
alert(map.get(true));
alert(map.size);

map.clear();

// Map can also use objects as key

let user = {name: "Sudhanshu"};

map.set(user, 1);

alert(map.get(user));

// Chaining

map.set(1,"McLaren").set(2,"Ferrari").set(3,"RBPT");

alert(map.get(2));

// Iteration over map => for..of over
// map.keys() => returns an iterable for keys
// map.values() => returns an iterable for values
// map.entries() => returns an iterable for entries.

for (let key of map.keys()) {
    alert(key);
}

for (let value of map.values()) {
    alert(value);
}

for (let entry of map.entries()) {
    alert(entry)
}

// forEach(func() {}) => allows to run function on each entry.

map.forEach((value, key, map) => {
    alert(`${key} ${value}`);
})

// How to apply Map methods on an object ?

let obj = {
    name: "Sudhanshu",
    roll: "21121084",
}

// Object.entries({}) => returns an array of key-value pairs

let resArray = Object.entries(obj);

// Converting an array of key-value pairs into map

let mAp = new Map(resArray);

for (let entry of mAp.entries()) {
    alert(entry);
}

// Anagrams are words that have the same number of same letters, but in different order.
// Write a function aclean(arr) that returns an array cleaned from anagrams.

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

let aclean = (arr) => {
    let map = new Map();

    for (let element of arr) {
        let st = Array.from(element.toLowerCase()).sort().join("");

        map.set(st, element);
    }

    return Array.from(map.values());
}

alert( aclean(arr) ); 

// We’d like to get an array of map.keys() in a variable and then apply array-specific methods to it, e.g. .push.
