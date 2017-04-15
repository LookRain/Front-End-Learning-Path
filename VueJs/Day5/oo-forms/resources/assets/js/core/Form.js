import Errors from './Errors';

class Form {
    /**
     * Create a new Form instance.
     *
     * @param {object} data
     */
    constructor(data) {
        this.originalData = data;

        for (let field in data) {
            this[field] = data[field];
        }

        this.errors = new Errors();
    }

    data() {
    	let data = {};

    	for (let property in this.originalData) {
            data[property] = this[property];
        }
        // let data = Object.assign({}, this);
        // delete data.originalData;
        // delete data.errors;
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

    post(url) {
    	return this.submit('post', url);
    }

    submit(requestType, url) {
        return new Promise((resolve, reject) => {
            axios[requestType](url, this.data())
                .then(response => {
                    this.onSuccess(response.data);

                    resolve(response.data);
                })
                .catch(error => {
                    this.onFail(error.response.data);

                    reject(error.response.data);
                });
        });
    }

    onSuccess(data) {
        alert(data.message);
        
        this.reset();

    }

    onFail(errors) {
        this.errors.record(errors);
        // console.log(error);
    }
}

export default Form;