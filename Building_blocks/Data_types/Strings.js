// Escaped quotes => are used to insert a quote in the same quoted string.

alert('I\'m Sudhanshu Patel');

// length => this property has the string length.

alert('Sudhanshu'.length)

// What is the length of 'sudhanshu\nPatel' ?

alert('sudhanshu \n Patel'.length)

// length => counts all the characters in a string including special characters like "\n"

// Accessing Characters

let str = `Hello`;

// access the third character

alert(str[2]);
alert(str.at(2));

// access the last second character

alert(str[str.length - 2] === str.at(-2));

// Iteration using for..of

for (let char of str) {
    alert(char);
}

// Strings are immutable => we can C, R, D but not U.

// Changing the case => 
// toLowerCase()
// toUpperCase()

alert("Interface".toLowerCase());
alert("Interface".toUpperCase());

// *** SEARCHING ***
// Ways to search for a substring within a string
// str.indexOf(substr, start_pos) => searches substr in str from [start_pos, str.length] and returns a position wrt "str" where the match was found or -1

let s = "Find pattern given"
let pattern = "given";

alert(s.indexOf(pattern, 14));

// PROBLEM
// Find all occurences of the given pattern

let st = "As sly as a fox, as strong as an ox";
let target = "as";

let pos = 0;

while (true) {
    pos = st.indexOf(target, pos);
    if (pos === -1) break;

    alert(`${target} occurs at : ${pos}`);

    pos += target.length;
}

// lastIndexOf(substr, end_pos) => searches for substr in st from [0, end_pos] in reverse direction.
// Find all occurences of the given pattern but in reverse order.
pos = st.length;

while (true) {
    pos = st.lastIndexOf(target, pos);

    if (pos === -1) break;

    alert(`${target} occurs at : ${pos}`);

    pos -= 1;
}

// include(substr, pos) => searches substr in str from [pos, str.length] and returns true/false.

alert(st.includes(target, 18));

// startsWith(substr) & endsWith(substr) => do exactly what they say

alert(st.startsWith(target));

alert(st.endsWith("ox"));

// Getting a substring

// *** slice(start_pos, end_pos) => returns a part of the string from [start, end)

alert(st.slice(3,6));

// start_pos & end_pos => can be -ve but start_pos < end_pos

alert(st.slice(-15, -9));

// substring(start_pos, end_pos) => returns a part of the string from [start_pos, end_pos)
// Here start_pos > end_pos is allowed.
// Negative arguments are not allowed.

alert(st.substring(3, 6));
alert(st.substring(6, 3));

// substr(start_pos, len) => returns a part of the string from start_pos with the given length.
// start_pos can be negative => in this case counting will be done from the end.

alert(st.substr(-15, 6));

// String comparison => strings are compared character-by-character in alphabetical order.
// Each character has a corresponding numeric code => UTF-16

// PROBLEM

// Write a function ucFirst(str) that returns the string str with the uppercased first character, for instance:

let ucFirst = (str) => str[0].toUpperCase() + str.slice(1, str.length);

alert(ucFirst("xarvis"));

// Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.
// The function must be "case-insensitive":

let checkSpam = (str) => {
    str = str.toLowerCase();

    if (str.includes("viagra") || str.includes("xxx")) return true;

    return false;
};

alert(checkSpam('buy ViAgRA now'));
alert(checkSpam('free xxxxx'));
alert(checkSpam("innocent rabbit"));

// Truncate the text

// Create a function truncate(str, maxlength) that checks the length of the str and, 
// if it exceeds maxlength – replaces the end of str with the ellipsis character "…", 
// to make its length equal to maxlength.

let truncate = (str, maxlength) => {
    if (str.length > maxlength) {
        str = str.slice(0, maxlength);
        str = str + String.fromCodePoint(0x2026);
    }

    return str;
}

alert(truncate("What I'd like to tell on this topic is:", 20))

// String.fromCodePoint(0x2026) => Creates character by its numeric code.

// We have a cost in the form "$120". That is: the dollar sign goes first, and then the number.

// Create a function extractCurrencyValue(str) that would extract the numeric value from such string and return it.

let extractCurrencyValue = (str) => {
    let pos = 0;

    while (pos < str.length) {
        if (str.codePointAt(pos) >= 48 && str.codePointAt(pos) <= 57) return +str.slice(pos);
        else pos++;
    }
}

alert(extractCurrencyValue("$120"));
alert(extractCurrencyValue("Rs1200"));



