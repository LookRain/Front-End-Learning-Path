function fire(bool) {
	if (bool) {
		let foo = 'bar';
		console.log(foo);
	} else {
		console.log(foo);
	}
}

fire(false);