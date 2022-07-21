// Blue Print
// Factory Functions and Constructor Functions
// Factory Functions

// const john = {
//   firstName: 'john',
//   lastName: 'anderson',
//   fullName: function () {
//     console.log(
//       `My full name is ${this.firstName} ${this.lastName} and I love JS`
//     );
//   },
// };
// const bob = {
//   firstName: 'peter',
//   lastName: 'sanders',
//   fullName: function () {
//     console.log(`My full name is ${this.firstName} ${this.lastName}`);
//   },
// };

// function createPerson() {
//   return {
//     firstName: 'john',
//     lastName: 'sanders',
//     fullName: function () {
//       console.log(
//         `My full name is ${this.firstName} ${this.lastName} and I love JS`
//       );
//     },
//   };
// }

function createPerson(firstName, lastName) {
	return {
		// can use shorthand of simply "firstName," instead - as names are the same
		firstName: firstName,
		lastName: lastName,
		fullName: function () {
			console.log(
				`My full name is ${this.firstName} ${this.lastName} and I love JS`
			);
		},
	};
}

// const john = createPerson();
// john.fullName();
// const bob = createPerson()
// bob.fullName();

const john = createPerson('john', 'anderson');
john.fullName();
const bob = createPerson('susy', 'apple');
bob.fullName();
const susy = createPerson('bob', 'jordan');
susy.fullName();
