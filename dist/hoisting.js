// ---- hoist means uplift i.e. a variable can be used before it has been declared.


//x = 5; // Assign 5 to x
//console.log(x);
//var x; // Declare x


//var x = 1;
//console.log(x+y);
//var y = 2;

//var x = 1;
//var y;
//console.log(x+y);
//y = 2;


var c = add(2, 3);

console.log(c);

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

var c = multiply(2, 3);

console.log(c);