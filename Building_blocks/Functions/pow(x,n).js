// PROBLEM STATEMENT
// Create a web-page that prompts for x and n, and then shows the result of pow(x,n).

function pow(x, n) {
    if (n === 0) return 1;
    
    let halfPower = pow(x, Math.floor(n / 2));

    if (n%2 === 0) 
        return halfPower*halfPower;

    return halfPower*halfPower*x;
}

let x = Number(prompt("Enter x : ", " "));
let n = Number(prompt("Enter n : ", " "));

if (n < 1) {
    alert(`Power ${n} is not supported, use a positive integer`);
}
else {
    alert(pow(x, n));
}