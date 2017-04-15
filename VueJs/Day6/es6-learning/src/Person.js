class Person {
	constructor(name) {
		this.name = name;
	}

	greet() {
		return this.name + " says hello";
	}
}

console.log(new Person("Lu Yu").greet());