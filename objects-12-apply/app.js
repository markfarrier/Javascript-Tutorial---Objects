// call - runs instantly, arguments - list of items

const john = {
	name: 'john',
	age: 24,
};
const susan = {
	name: 'susan',
	age: 21,
};

// john.greet();

function greet(city, country) {
	console.log(this);
	console.log(
		`Hello, I'm ${this.name} and I'm ${this.age} years old and I live in ${city}, ${country}`
	);
}

// this will fail, as susan doesn't have a greet function
// susan.greet();

// in below case, "this" in the greet function will point to a window, rather than Susan or John
// greet();

// this next case won't work either, "this" will still point to a window even though the function is being taken from the john object
// const secondGreet = john.greet;
// secondGreet();

// will work - call takes a list as argument
greet.call(john, 'san diego', 'us');
greet.call(susan, 'san diego', 'us');
greet.call({ name: 'peter', age: 30 }, 'san diego', 'us');

// won't work - apply takes an array as argument
greet.apply(john, 'san diego', 'us');
greet.apply(susan, 'san diego', 'us');
greet.apply({ name: 'peter', age: 30 }, 'san diego', 'us');

// will work, as argument is now an array
greet.apply(john, ['san diego', 'us']);
greet.apply(susan, ['san diego', 'us']);
greet.apply({ name: 'peter', age: 30 }, ['san diego', 'us']);
