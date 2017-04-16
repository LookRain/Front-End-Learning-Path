"use strict";

function sum() {
	for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
		numbers[_key] = arguments[_key];
	}

	return numbers.reduce(function (prev, current) {
		return prev + current;
	});
}

console.log(sum(1, 2, 3, 4, 6, 7));

function sum2(x, y) {
	return x + y;
}

var nums = [1, 2];
console.log(sum2.apply(undefined, nums));