Vue.component('coupon', {
	props: ['code'],

	template: `
		<input class="input" :value="code" @input="updateCode($event.target.value)">
	`,

	methods: {
		updateCode(code) {
			this.$emit('input', code);
		}
	}

});


new Vue({
	el: '#root',
	data: {
		coupon: 'coupon is here'
	},
	// methods: {
	// 	updateCoupon(input) {
	// 		this.coupon = input;
	// 	}
	// }
});