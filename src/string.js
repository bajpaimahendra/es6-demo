/*

Template Literals
	Templatestrings use back-ticks (``) rather than the single or double quotes. 

*/


//---------- Example 1 --------------------

	var greeting = `Hello World!`; 

	console.log(greeting);

//---------- Example 2 --------------------


	var name = "Mahendra"; 
	console.log(`Hello, ${name}!`);


//----------- Example 3 --------------------

	var a = 10; 
	var b = 10; 
	console.log(`The sum of ${a} and ${b} is  ${a+b} `);


//----------  Example 4 ---------------------

	function fn() { return "Hello World"; } 
	console.log(`Message: ${fn()} !!`);


//--------- Example 5 -----------------------

var multiLine = `
   This is 
   a string 
   with multiple 
   lines`; 
console.log(multiLine)


