console.log(
	[2,4,6,8,10].indexOf(8) > -1
);

console.log(
	[2,4,6,8,10].includes(8)
);


// console.log(
// 	[2,4,6,8,10,11].find(function(item) {
// 		// return item > 8;
// 		return item % 2 > 0
// 	})
// );

console.log(
	[2,4,6,8,10,11].find(item => item % 2 > 0)
);

console.log(
	[2,4,6,8,10,11].findIndex(item => item % 2 > 0)
);