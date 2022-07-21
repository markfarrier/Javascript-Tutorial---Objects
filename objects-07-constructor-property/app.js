// All Objects in Javascript have access to constructor property that returns a constructor function that created it.
// built in constructor functions
// arrays and functions are objects in javascript

function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.fullName = function () {
		console.log(
			`My full name is ${this.firstName} ${this.lastName} and I love React`
		);
	};
}

const john = new Person('john', 'sanders');
// below will log the function that created the john Person object
// console.log(john.constructor);

const bob = {};
// will log a constructor function called Object
console.log(bob.constructor);

const list = [];
// will log a constructor function called Array
console.log(list.constructor);

const sayHi = function () {};
// will log a constuctor function called Function
console.log(sayHi.constructor);

// can assign a constructor function to a constant or variable
// below may be an example of what you could do if you simply forget the Person(firstName,lastName) constructor, as it can be accessed through the john Person object
const susy = new john.constructor('susy', 'carpenter');
susy.fullName();
