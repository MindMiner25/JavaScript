// Why objects are created ?
// Objects are created to represent entities of the real world like users, orders and so on.

// A user have some properties and most importantly the user can act.
// Actions are represented in JS by functions in properties.

// Let's teach the user to greet

let user = {
    name : "John",
    age : 30,
}

user.greet = function () {
    alert("Hello!");
};

user.greet();

// Method => A function which is a property of an object.

// Using a predeclared function as a method

function addToCart () {
    alert("Item added to cart");
};

user.addToCart = addToCart;

user.addToCart();

// To access the object, a method can use the "this" keyword.

user.SayHi = function () {
    alert(this.name);
    alert(this.age);
};

user.SayHi();

// "this" can be used in any function even it is not a method of an object.

// Arrow functions do not have their own "this".

// Create a Calculator

let calculator = {
    a : 0,
    b : 0,
    read () {
        this.a = +prompt("Enter a", " ");
        this.b = +prompt("Enter b", " ");
    },
    sum () {
        return this.a + this.b;
    },
    mul () {
        return this.a * this.b;
    },
}

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );

// There’s a ladder object that allows you to go up and down:

let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // shows the current step
      alert( this.step );
      return this;
    }
};

ladder.up().up().down().showStep().down().showStep().down().showStep();