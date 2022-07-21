// nested objects
// set variable as property value
// dot notation vs bracket notation

const age = 40;
let random = 'random-value';
random = 'age';
const person = {
	name: 'john',
	// hardcoded age:
	// age: 25,
	// using variable instead:
	// age: age,
	// ES6 shorthand if variable is the same name as property
	age,
	married: true,
	siblings: ['anna', 'peter'],
	greet: function (name) {
		console.log(`Hello, my name is ${name}`);
	},
	sayHello(name) {
		console.log(`Hello, my name is ${name}`);
	},
	job: {
		title: 'developer',
		company: {
			name: 'coding addict',
			address: '123 main street',
		},
	},
	// below needs to be in quotation marks, as a variable cannot be set with this name (with the dash), and neither can a property unless defined in the following way (with quotes):
	'random-value': 'random',
	'test test': 'test2',
};

// below will return undefined as person.work doesn't exist
console.log(person.work);
// below will produce an error instead, as you're trying to access a property of something that doesn't exist (is undefined)
// console.log(person.work.title);
console.log(person.job.title);
console.log(person.job.company.address);
console.log(person);
console.log(person['name']);
// if you try to do person.random-value, the code will automatically be formatted to use the bracket notation below, if the property is defined using quotes and contains characters such as a dash or space that javascript won't like
console.log(person['random-value']);
console.log(person['test test']);
// can use the string variable instead
console.log(person[random]);
