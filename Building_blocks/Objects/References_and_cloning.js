// Objects are stored and copied by reference
// Primitives are copied by values

let User = {
    name : "John",
}

let user = User   // user :- object variable

// Copying object variable

let admin = user;

alert(admin);

// When an object variable is copied, the reference is copied but the object itself is not duplicated.

// Objects declared as constants can be modified ==> one of the ill-effects of storing objects by reference.

// Cloning => To copy the structure of an existing object

let user_cloned = {}

for (let key in User) {
    user_cloned[key] = User[key];
}

alert(user_cloned.name);

// Alternate method of cloning :- Object.assign(target, ...sources) => copies properties of all source objects and returns it as the target result.

let permission1 = {canView: true};
let permission2 = {canEdit: true};

Object.assign(User, permission1, permission2);

alert(User.canView);

// If the copied property name already exists, it gets overidden.

let clone = Object.assign({}, User);

// Nested Cloning

clone.sizes = {
    height: 182,
    width: 50,
};

for (let key in clone) {
    alert(clone[key]);
}

// Now clone holds an object as its property. 
// So, if we make another clone of clone then that object will be referenced to another clone.
// And any modifications made into that object wrt one object will be carried further in the second object.
// For that we need deep cloning or structured cloning

// structuredClone(object) clones object with all the nested properties.

let clone2 = structuredClone(clone);

alert(clone.sizes === clone2.sizes);

// clone and clone2 have different object property with same structure.

// structuredClone() can clone most of data types
// 1. Objects
// 2. Arrays
// 3. Primitive Values
// It also supports circular references, when the object property references the object itself.

// Structured clone fails when an object has a function property