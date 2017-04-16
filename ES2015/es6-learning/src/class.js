// function User(username, email) {
// 	this.username = username;
// 	this.email = email;
// }
// User.prototype.changeEmail = function(newEmail) {
// 	this.email = newEmail;
// };

// var user = new User('Lu Yu', 'hi@gmail.com');
// user.changeEmail('hahaha');


// console.dir(user);

class User {
	constructor(username, email) {
		this.username = username;
		this.email = email;
	}

	static register(...args) {
		return new User(...args);
	}

	get capName() {
		let name = this.username;
		name = name.toUpperCase();
		return name;
	}

	changeEmail(newEmail) {
		this.email = newEmail;
	}
}




let user = User.register('Lu Yu', 'hi@gmail.com');
// user.username('hahaha');
console.log(user.capName);