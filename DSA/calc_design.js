// Create a constructor function Calculator that creates “extendable” calculator objects.

function Calculator () {
    this.method = {
        "+" : (a,b) => a+b,
        "-" : (a,b) => a-b,
    };

    this.calculate = (str) => {
        // format = "number + number"
        let a = str.split(" ");

        let num1 = +a[0];
        let op = a[1];
        let num2 = +a[2];

        if (!this.method(op)|| !isFinite(num1) || !isFinite(num2)) {
            return NaN;
        };

        return method[op](num1,num2);
    }

    this.addMethod = (operator, operation) => {
        this.method[operator] = operation;
    };
}