Vue.component('counter', {
	template: `
		<div>
            <div class="column is-half is-offset-one-quarter">
                <div class="notification is-primary">
                    Current Number: {{counter}}
                    Big Number: {{bigCounter}}
                </div>
            </div>
            <div class="column is-half is-offset-one-quarter">
                <a class="button is-info" @click="increment">+</a>
                <a class="button is-info" @click="decrement">-</a>
            </div>
        </div>
	`,
	data() {
		return {
			counter: 0
		};
	},
	computed: {
		bigCounter() {
			return this.counter * 10;
		}
	},
	methods: {
		handleMe() {
			alert('handled!');
		},

		increment() {
			this.counter ++;
		},

		decrement() {
			if (this.counter > 0) this.counter --;
		}
	}


});

new Vue({
	el: '#root',

	data: {
		counter: 0
	},

	
});