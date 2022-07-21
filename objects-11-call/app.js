// call - runs instantly, arguments - list of items

const john = {
	name: 'john',
	age: 24,
	greet: function () {
		console.log(this);
		console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old`);
	},
};
const susan = {
	name: 'susan',
	age: 21,
};

// john.greet();

function greet() {
	console.log(this);
	console.log(`Hello, I'm ${this.name} and I'm ${this.age} years old`);
}

// this will fail, as susan doesn't have a greet function
// susan.greet();

// in below case, "this" in the greet function will point to a window, rather than Susan or John
// greet();

// this next case won't work either, "this" will still point to a window even though the function is being taken from the john object
// const secondGreet = john.greet;
// secondGreet();

// when using the call function, the first argument will be what "this" refers to
greet.call(john);
greet.call(susan);
greet.call({ name: 'peter', age: 30 });
