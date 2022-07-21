/* In Reg Functions (not arrow) "this"
determined by "HOW"!!! a function is invoked (left of .)

i.e. WHO is invoking the function

if invoked without anything on left of dot: defaults to global - window
arrow functions - pump the breaks
*/

// below will log the Window object
// console.log(this);

function showThis() {
	console.log(this);
}

const john = {
	name: 'john',
	showThis: showThis,
};
const bob = {
	name: 'bob',
	showThis: showThis,
};

// will log the john object, as john invoked the method
john.showThis();
// will log the bob object, as bob invoked the method
bob.showThis();

// will log the window object, as there's nothing to the left of the dot
showThis();

const btn1 = document.querySelector('.btn-1');
const btn2 = document.querySelector('.btn-2');

btn1.addEventListener('click', showThis);
btn2.addEventListener('click', showThis);
// will log the window object, as the global is to the left of the this, in the following case where an anonymous callback function is used
btn2.addEventListener('click', function () {
	showThis();
});
