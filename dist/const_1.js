/*
	variables created by the const keyword are immutable
*/

/*

	const RATE = 0.1;
	RATE = 0.2; // TypeError

*/

// #### const and object


/*

	const person = { age: 20 };
	person.age = 30; // OK

	//person = {age: 40}; // TypeError

	console.log(person.age); // 30


*/

/*

	const person = Object.freeze({age: 20});
	person.age = 30;

	console.log(person.age); // 20


*/

/*

	for (const i = 0; i < scores.length; i++) { // TypeError
    		console.log(scores[i]);
	}

*/