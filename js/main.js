var iceCream = ['pistachio', 'mint', 'vanilla'];

iceCream.push('chocolate');

var trump = {
	firstName: 'Donald',
	lastName: 'Trump',
	termLength: 4,
	party: 'Republican',
	yearsOfPresidency: 1
};

var obama = {
	firstName: 'Barack',
	lastName: 'Obama',
	termLength: 4,
	party: 'Democrat',
	yearsOfPresidency: 8
};

var bush2 = {
	firstName: 'George W.',
	lastName: 'Bush',
	termLength: 4,
	party: 'Republican',
	yearsOfPresidency: 8
};

var clinton = {
	firstName: 'Bill',
	lastName: 'Clinton',
	termLength: 4,
	party: 'Democrat',
	yearsOfPresidency: 8
};

var bush1 = {
	firstName: 'George H. W.',
	lastName: 'Bush',
	termLength: 4,
	party: 'Republican',
	yearsOfPresidency: 4
};

var presidents = [trump, obama, bush2, clinton, bush1];

console.log(presidents[2].firstName + ' ' + presidents[2].lastName);

function howdy() {
	console.log('Alex Marhefka says hi!');
}

howdy();

var numba = function (string) {
	if (string.length < 7) {
		console.log('What a short little word!');
	} else if (string.length > 7) {
		console.log("I'm sorry, but that's too many to count.");
	} else {
		console.log('7, what a perfect choice!');
	}
};

numba('7');
numba('seventy');
numba('university');

function inception(display, favMovie) {
	display(favMovie);
}

inception(console.log, 'Moonrise Kingdom is a fantastic movie.');
