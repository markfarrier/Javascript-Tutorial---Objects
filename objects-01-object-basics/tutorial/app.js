// Objects Basics

/*
Objects are collections of key (property) value pairs
Property values can be strings, numbers, booleans, arrays and functions however if the property value is a function it's called a method
*/

// object literal syntax,{}
// dot notation

const person = {
	name: 'john',
	age: 25,
	married: true,
	siblings: ['anna', 'peter'],
	// you can set up functions as a property (should probably use this just for less confusion)
	greet: function (name) {
		console.log(`Hello, my name is ${name}`);
	},
	// or can do a shorthand where you just write it as you would a regular method
	sayHello(name) {
		console.log(`Hello, my name is ${name}`);
	},
};

console.log(person.name);

const name = person.name;
console.log(name);
console.log(person);

person.age = 60;
person.city = 'chicago';
// delete property
// delete person.siblings;
const siblings = delete person.siblings;
// below will print "true" indicating a successful deletion has occured
console.log(siblings);

console.log(person);
