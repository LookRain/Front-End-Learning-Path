class Errors {
	constructor() {
		this.errors = {};
	}

	get(field) {
		if (this.errors[field]) {
			return this.errors[field][0];
		}
	}

	has(field) {
		return this.errors.hasOwnProperty(field);
	}

	any() {
		return Object.keys(this.errors).length > 0; //Object.keys() return an array of the keys of the object

	}

	record(errors) {
		this.errors = errors;
	}

	clear(field) {
		if (field) {
			delete this.errors[field];
			return ;
		}

		this.errors = {};
	}
}

class Form {
	constructor(data) {
		this.originalData = data;

		for (let field in data) {
			this[field] = data[field];
		}

		this.errors = new Errors();
	}

	data() {
		let data = Object.assign({}, this); 
		delete data.originalData;
		delete data.errors;
		// console.log('look here');
		// console.log(data);
		return data;
	}

	reset() {
		for (let field in this.originalData) {
			this[field] = '';
		}
		this.errors.clear();
	}

	submit(requestType, url) {
		// console.log(this.$data.form.data);
		axios[requestType](url, this.data())
		.then(this.onSuccess.bind(this))
		.catch(this.onFail.bind(this));

	}

	onSuccess(response) {
		alert(response.data.message);
		
		this.reset();

	}

	onFail(error) {
		this.errors.record(error.response.data);
		// console.log(error);
	}
}

new Vue({
	el: '#app',

	data: {
		form: new Form({
			title: '',
			description: ''
		})		
	},



	methods: {
		onSubmit() {

			this.form.submit('post', '/projects');
		}
	}
});