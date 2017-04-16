function getPerson() {
	let name = 'John';
	let age = 25;

	return {
		name, 
		age, 
		greet() {
			return `Hello ${this.name}`
		}
	};
}



// alert(getPerson().greet());


let person = {
	name: 'John',
	age: 32,
	job: 'piper',
	place: 'singapore'
};

let {name, age, job, place} = person;
alert(place);

function getData({name, age}) {
	console.log(name, age);
}
getData(person);