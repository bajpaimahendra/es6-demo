
	let numbers = [6, 7, 8];
	numbers.foo = "foo";
	 
	for (let i in numbers) {
	    console.log(numbers[i]);
	}
	// 0
	// 1
	// 2
	// foo


	for (let i of numbers) {
	    console.log(i);
	}
	// 6
	// 7
	// 8
