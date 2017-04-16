'use strict';

function getPerson() {
	var name = 'John';
	var age = 25;

	return {
		name: name,
		age: age,
		greet: function greet() {
			return 'Hello ' + this.name;
		}
	};
}

// alert(getPerson().greet());


var person = {
	name: 'John',
	age: 32,
	job: 'piper',
	place: 'singapore'
};

var name = person.name,
    age = person.age,
    job = person.job,
    place = person.place;

alert(place);

function getData(_ref) {
	var name = _ref.name,
	    age = _ref.age;

	console.log(name, age);
}
getData(person);