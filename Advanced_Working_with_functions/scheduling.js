// Scheduling

// setTimeout(func|code,delay,[arg1,arg2,arg3,...]) 
// Allows to run a function once after an interval of time.

let sayHi = (phrase,name) => {
    alert(phrase+','+name);
}

setTimeout(sayHi,2000,"Morning","Sudhanshu");

// If the argument func|code => string, JS creates a function from it.

setTimeout("alert('Good-Morning Sudhanshu')",3000);

// So we can define a function inside a setTimeout().

let timerId = setTimeout((phrase,name)=>alert(phrase+","+name),3000,"Good-Morning","Sudhanshu");

// canceling the scheduling of a function.

clearTimeout(timerId);

// setInterval(func|code,delay,[arg1,arg2,arg3,...])
// Allows to run a function regularly after an interval of time.

// Nested setTimeout

// PROBLEM
// we need to write a service that sends a request to the server every 5 seconds asking for data, 
// but in case the server is overloaded, 
// it should increase the interval to 10, 20, 40 seconds…

// Here we require a nested setTimeout.

// Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to.

// Make two variants of the solution.

// Using setInterval.
// Using nested setTimeout.

let printNumbers = (from,to) => {
    // setInterval(()=>{
    //     if (from <= to) alert(from++);
    // },1000);

    let number = setTimeout(function f() {
        if (from <= to) alert(from++);
        number = setTimeout(f,1000);
    },1000) 

    // Delay has been set precisely.
};

printNumbers(1,10);