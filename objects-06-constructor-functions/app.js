// Blue Print
// Factory Functions and Constructor Functions
// Constructor Functions
// new - creates new object, points to it, omit return

// common practice is to name constructor functions with a capital letter to signify that it is a constructor function
function Person(firstName, lastName) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.fullName = function () {
		console.log(
			`My full name is ${this.firstName} ${this.lastName} and I love React`
		);
	};
	console.log(this);
}

// in below commented-out example, "this" will refer to the global, which does not have a fullName.  firstName and lastName get implicitly created for the global Window object, however, because fullName is a function it cannot
// the "new" keyword allows the function to omit the return
// const mark = Person('mark', 'anderson');
// mark.fullName();
// console.log(mark);

// if you use the new keyword, it will mean that "this" will point to the object instance
const john = new Person('john', 'anderson');
john.fullName();
const bob = new Person('bob', 'jordan');
bob.fullName();

function createPerson(firstName, lastName) {
	return {
		firstName: firstName,
		lastName: lastName,
		fullName: function () {
			console.log(
				`My full name is ${this.firstName} ${this.lastName} and I love JS`
			);
		},
	};
}
