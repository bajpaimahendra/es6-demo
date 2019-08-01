/*
let : the variables will declared in global-scoped if you declare it outside of a function
	 or function-scoped in case you declare it inside a function.
var : the variables will declared in block-scoped.

*/



/*

let x = 10;
if (x == 10) {
    let x = 20;
    console.log(x); // 20;
}
console.log(x); // 10

*/

let x = 10;
if (x == 10) {
    var x = 20;  // error due to hoisting
    console.log(x); // 20;
}
console.log(x); // 10
