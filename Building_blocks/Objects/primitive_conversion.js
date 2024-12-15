// Javascript do not support operator overloading.

// Conversion Rules

// Object --> boolean ==> No such conversion. All objects are true in boolean context.

// Object --> Number ==> Such conversion is possible in case of application of mathematical operations on object.

// Object --> string ==> Such conversion is possible where a string is expected to be an output.

// *** Such cases also occur when the operator is "not sure" what type to expect.
// For instance, "+" --> can work with both strings(concatenation) and Numbers(add).
// in such cases the operator uses the "hint" to convert it.

// conversion methods

// Symbol.toPrimitive ==> built-in symbol that should be use to name the conversion method
// Symbol.toPrimitive => returns a primitive, not an object.

let user = {
    name : "Sudhanshu",
    amount : 3600000,

    [Symbol.toPrimitive] : function (hint) {
        return (hint == "string") ? this.name : this.amount;
    },
}

alert(user);
alert(+user);
alert(user[Symbol.toPrimitive]("string") + " patel");