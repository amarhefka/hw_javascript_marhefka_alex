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
