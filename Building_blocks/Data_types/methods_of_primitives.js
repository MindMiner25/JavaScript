// Objects do have more features than primitives but are "heavier" than primitives.
// That is they require additional resources to support the internal machinery.

// There are object wrappers for each primitive types :
// 1. string --> String
// 2. number --> Number
// 3. boolean --> Boolean
// 4. symbol --> Symbol
// 5. bigint --> BigInt

// Instance

let str = "Good Morning!";

alert(str.toUpperCase());

// STEPS :-
// 1. A special object is created that holds the value of str as its property and has useful methods.
// 2. The method runs and returns a new string.
// 3. The special object is destroyed.

// So primitives can provide methods while remaining "lightweight".

// 6. null --> no methods
// 7. undefined --> no methods

// PROBLEM :-
// Can we add a string property?

let s = "Hello";

s.test = 5;

alert(str.test);   // undefined

// WHY?
// When the property is accessed, 
// The wrapper object is created.
// The wrapper object gets the test property.
// The wrapper object disappears.
// Thus, primitives are not objects.
