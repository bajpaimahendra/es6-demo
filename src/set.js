/*  ES6 provides a new type Set.
 * Set is a collection of unique values of any types.
 * 
 * 
 */

///---  create a new empty Set -------------------------------------------------

let setObject = new Set();

///--- create a new Set from an array. -----------------------------------------

let chars = new Set(['a', 'a', 'b', 'c', 'c']);
console.log(chars); // Set {"a", "b", "c"}

let type = typeof chars;
console.log(type); // object    

let size = chars.size;
console.log(size);//  3

///--- add an element to the set, by add() method  -----------------------------

chars.add('d');
console.log(chars); // Set {"a", "b", "c", "d"}

///--- check if a set has a specific element, by has() method. -----------------

let exist = chars.has('z');
console.log(exist);// true

///--- The delete() method returns true , if element has removed successfully. -

chars.delete('d');
console.log(chars); // Set {"a", "b", "c"}

///-- To remove all elements of a set, by clear() method -----------------------

chars.clear();
console.log(chars); // Set{}

///--- Looping the elements of a  Set ------------------------------------------

console.log('----------------------------------------------------------------');

let roles = new Set();
roles.add('admin')
    .add('editor')
    .add('subscriber');

for (let role of roles) {
    console.log(role);
}

///--- ------------------------------------------------------------------------

for (let [key,value] of roles.entries()) {
    console.log(key === value);
}
// true
// true
// true



