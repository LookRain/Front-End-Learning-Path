'use strict';

function fire(bool) {
	if (bool) {
		var _foo = 'bar';

		console.log(_foo);
	} else {
		console.log(foo);
	}
}

fire(false);