/*

// Block scoping simply says, I want to be able to treat a { .. } block as a scope
// ES6 is finally introducing a mechanism for block scoping, using the let keyword.
// let is a sibling to var. But declarations made with let are scoped to the blocks in which they occur
// So wherever you need to create limited-scope declarations, use let.

*/

var a=10, b=20;
// other code
// later, swap `a` and `b`
if (a && b) {
    let tmp = a;
    a = b;
    b = tmp;
   console.log('tmp inside if bloc ',tmp);
}

console.log('tmp outside the if bloc ',tmp); // produce error 
