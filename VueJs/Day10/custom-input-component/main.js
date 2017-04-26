Vue.component('coupon', { 
	model: {
        prop: 'code',
        event: 'input'
    },
    props: ['code'],

    data(){
    	return {
    		validCodes: ['3154', '666', '999']
    	}
    },

    template: `
		<input class="input" :value="code" @input="updateCode($event.target.value)" ref="input">
	`,

    methods: {
        updateCode(code) {
        	if (this.validCodes.includes(code)) {
        		alert('applied!!!!');

        		this.$refs.input.value = code = '';

        	}

            this.$emit('input', code);
        }
    },
});

/*
Using :value="code" in my component did not work for me. In the Vue docs, section "Form Input Components using Custom Events", it states for a component to work with v-model, it needs (specifically starting with v 2.2):

1) Accept 'value' prop
2) emit an input event with a new value

So in my code I changed props: ['code'] to props: ['value']

Also changed :value="code" to :value="value"
*/

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
