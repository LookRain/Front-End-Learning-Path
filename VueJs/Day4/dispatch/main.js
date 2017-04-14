window.Event = new class {
	constructor() {
		this.vue = new Vue();
	}

	fire(event, data = null) {
		this.vue.$emit(event, data);
	}

	listen(event, callback) {
		this.vue.$on(event, callback);
	}
}



Vue.component('coupon', {
	template: '<input placeholder="enter your code" @blur="onCouponApplied">',
	methods: {
		onCouponApplied() {
			Event.fire('applied'); //@applied="onCouponApplied"
		}
	}
});

Vue.component('notification', {
    template: `
	<div v-if="shouldShow" class="notification is-primary">
        <button class="delete"></button>   
    </div>
	`,

	data() {
		return {
			shouldShow: false
		}
	},
	created() {
			Event.listen('applied', () => this.shouldShow = true);
		}
})



new Vue({
	el: '#root',

	data: {
		couponApplied: false
	},

	created() {
		Event.listen('applied', () => alert('handling!'));
	},

	methods: {
		onCouponApplied() {
			this.couponApplied = true;
		}
	},

	
});

