// this
// points to the left of the dot

const john = {
	firstName: 'john',
	lastName: 'anderson',
	// fullName: function (name) {
	fullName: function () {
		console.log(this);
		console.log(`My full name is ${this.firstName} ${this.lastName}`);
		// console.log(`My full name is John Anderson`);
	},
};
const bob = {
	firstName: 'peter',
	lastName: 'sanders',
	fullName: function () {
		console.log(this);
		console.log(`My full name is ${this.firstName} ${this.lastName}`);
		// console.log(`My full name is Anna Sanders`);
	},
};

// if using arguments with the fullName function
// john.fullName('John Anderson');

john.fullName();
bob.fullName();
