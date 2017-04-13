Vue.component('coupon', {
	template: '<input placeholder="enter your code" @blur="onCouponApplied">',

	methods: {
		onCouponApplied() {
			this.$emit('applied'); //@applied="onCouponApplied"
		}
	}

});

new Vue({
	el: '#root',

	data: {
		couponApplied: false
	},

	methods: {
		onCouponApplied() {
			this.couponApplied = true;
		}
	}
});

