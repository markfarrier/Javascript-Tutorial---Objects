/*
Property Lookup
If child does not have ask parent
Everything in JS is an Object
*/

function Account(name, initialBalance) {
	this.name = name;
	this.balance = initialBalance;
	// if the instance has the property, it takes precedence (i.e. in a situation where there's both a bank on the prototype and on the object instance
	// this.bank = 'Bank Of America';
}

const john = new Account('john', 200);
const bob = new Account('bob', 0);

Account.prototype.bank = 'CHASE';
Account.prototype.deposit = function (amount) {
	this.balance += amount;
	console.log(`Hello ${this.name}, your balance is ${this.balance}`);
};

// even if there's only a prototype property for bank, john.bank will use that property
// console.log(john.bank);

console.log(bob);

console.log({});
console.log([]);
