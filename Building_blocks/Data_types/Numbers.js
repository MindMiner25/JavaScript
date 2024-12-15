// methods of Number

// toString(base) => returns a string representation of the num in the numeral system with the given base

let num = 255;

alert(num.toString(2));
alert(num.toString(8));
alert(num.toString(16));
alert(num.toString(32));

// shorten URL

alert(12700155005..toString(36));

// If we want to call a method directly on a number, then we need to place two dots after it.

// Rounding

// Math.floor
alert(Math.floor(4.5));
// Math.ceil
alert(Math.ceil(4.5));
// Math.round
alert(Math.round(4.5));
// Math.trunc => removes anything after the decimal point without rounding
alert(Math.trunc(4.5));

// rounding off a number to precision

let precision = 4;

// using toFixed(precision) => returns a string.

alert(4.566.toFixed(precision));

// Fractions suffer precision loss

// For instance

alert(0.1.toFixed(20)); // 0.10000000000000000555 => due to precision loss

// Reason is any number in JS is allocated a 64-bit memory
// 64 bit => 52 bits for storing digits + 11 bits for storing the position + 1 bit for storing the sign.
// Try avoid storing fractions as much as possible

// isFinite() => converts argument to a number and test whether it is finite.
// isNaN() => converts argument to a number and tests whether it is nan.

alert(isFinite(Infinity));
alert(isNaN(NaN)); // *** NaN is unique number and does not even equals to itself.
alert(NaN === NaN); // false

// parseInt() / parseFloat() => extracts number out a string.

alert(parseInt("100psi")); // 100
alert(parseFloat("34.33op")) // 34.34
alert(parseFloat("oploy90")) // NaN as preceding alphabets stops the process.

// Math functions:-

// Math.random() => returns a random number from 0 - 1
// Math.max(a,b,c,...) and Math.min(a,b,c,...)
// Math.pow(n, power)

// PROBLEM
// Why 6.35.toFixed(1) == 6.3?

alert(Math.round(6.35*10)/10);

// ***** Fractions divisible by powers of 2 are exactly represented in the binary system.

// Create a function readNumber which prompts for a number until the visitor enters a valid numeric value.
// The resulting value must be returned as a number.
// The visitor can also stop the process by entering an empty line or pressing “CANCEL”. In that case, the function should return null.

function readNumber () {
    let num; 
    do {
        num = prompt("Enter num : ", " ");

        if (num == " " || num == null) {
            return null;
        }
    } while (isFinite(num) != true)

    return +num;
}

alert(readNumber());

// PROBLEM
// This loop is infinite. It never ends. Why?
// let i = 0;
// while (i != 10) {
//     i += 0.2;
//   }

alert(0.2.toFixed(20)); // 0.20000000000000001110

// due to lack of precision i never becomes equal to 10.

// PROBLEM

// The built-in function Math.random() creates a random value from 0 to 1 (not including 1).
// Write the function random(min, max) to generate a random floating-point number from min to max (not including max).

function random(min, max) {
    return Math.random() * (max-min) + min;
}

alert( random(1, 5) ); 
alert( random(1, 5) );
alert( random(1, 5) );

// Create a function randomInteger(min, max) that generates a random integer number from min to max including both min and max as possible values.
// Any number from the interval min..max must appear with the same probability.

function randomInteger (min, max) {
    // min = min + 0.5
    // max = max + 0.5
    return Math.floor(min + 0.5 + Math.random() * (max-min));
}

alert( randomInteger(1, 2) ); 
alert( randomInteger(1, 3) ); 
alert( randomInteger(3.99, 4) );