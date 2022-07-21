const counter = {
	count: 0,
	increment() {
		console.log(this);
		this.count++;
		console.log(this.count);
	},
};

const btn = document.querySelector('.increment');

// fail
// btn.addEventListener('click', counter.increment);

// some edge cases
// will be an issue if you remove the event listener, because then you remove the reference to the counter.  Should store the value in a variable or constant instead when you do the bind, rather than put it inside the addEventListener function.
// btn.addEventListener('click', counter.increment.bind(counter));

const increment = counter.increment.bind(counter);
btn.addEventListener('click', increment);
// btn.removeEventListener('click', increment);
