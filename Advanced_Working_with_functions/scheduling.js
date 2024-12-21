// Function call-scheduling.

function sum(a,b) {
    alert(a+b);
}

setTimeout(sum,2000,8,9);

// clearTimeout() -> to call of a scheduling

let timerId = setInterval(()=>alert("tick"),3000);

setTimeout(()=>{clearInterval(timerId), alert("stop")},10000);

