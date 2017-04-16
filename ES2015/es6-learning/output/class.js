'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var User = function () {
	function User(username, email) {
		_classCallCheck(this, User);

		this.username = username;
		this.email = email;
	}

	_createClass(User, [{
		key: 'changeEmail',
		value: function changeEmail(newEmail) {
			this.email = newEmail;
		}
	}, {
		key: 'capName',
		get: function get() {
			var name = this.username;
			name = name.toUpperCase();
			return name;
		}
	}], [{
		key: 'register',
		value: function register() {
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return new (Function.prototype.bind.apply(User, [null].concat(args)))();
		}
	}]);

	return User;
}();

var user = User.register('Lu Yu', 'hi@gmail.com');
// user.username('hahaha');
console.log(user.capName);