/*
Prototypal Inheritance Model
Javascript uses prototypal inheritance model. That means that every constructor function/class has a prototype property that is shared by every instance of the constructor/class. So any properties and methods or prototype can be acessed by every instance. prototype property returns a object
*/

function Account(name, initialBalance) {
	this.name = name;
	this.balance = initialBalance;
	// this.deposit = function (amount) {
	// 	this.balance += amount;
	// 	console.log(`Hello ${this.name}, your balance is ${this.balance}`);
	// };
}

const john = new Account('john', 200);
const bob = new Account('bob', 0);

// with deposit function uncommented, this will demonstrate that each object contains the same function, which is probably unnecessary to reeuse across every Account object
// console.log(john);
// console.log(bob);

// because bank won't change, this is set on the prototype property so it's automatically shared by every Account object
Account.prototype.bank = 'CHASE';
// likewise, we reuse the deposit function, so this is set up on the prototype property as well
Account.prototype.deposit = function (amount) {
	this.balance += amount;
	console.log(`Hello ${this.name}, your balance is ${this.balance}`);
};
console.log(john.bank);
console.log(bob);

john.deposit(300);
bob.deposit(1000);
