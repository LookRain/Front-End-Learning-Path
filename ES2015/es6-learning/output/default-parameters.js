"use strict";

function applyDiscount(cost) {
	var discount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : .10;

	//discount = discount || .10;
	return cost - cost * discount;
}

alert(applyDiscount(100));