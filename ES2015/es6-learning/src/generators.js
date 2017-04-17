//lets a function pause at a point and resume later.

function *numbers() {
	console.log('Begin:');
	yield 1;//like a return statement, but can be resumed at
	console.log('after 1:');
	yield 2;
	console.log('after 2:');
	yield 3;
	yield 4;
}

function *range(start, end) {
	while(start < end) {
		yield start++;
	}
}

let iterator = range(1, 5);

for (let i of iterator) {
	console.log(i);
}

console.log(
	[...range(1, 5)] //spread
);

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());


// let iterator = numbers();

// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);

