// window.Event = new class {
// 	contructor() {
// 		this.vue = new Vue();
// 	}

// 	fire(event, data = null) {
// 		this.vue.$emit(event, data);
// 	}

// 	listen(event, callback) {
// 		this.vue.$on(event, callback);
// 	}
// }

window.Event = new Vue();

Vue.component('plan', {

    template: `
				<div>
			        <span class="plan-name">{{ plan.name }}</span>
			        <span class="plan-price">{{ plan.price }}/Month</span>

			        <span v-if="isActive">
			        	Current Plan
			        </span>
			     
			        <span v-else>
			        	<button @click="selectPlan" class="v-else button is-primary">{{ isUpgrade ? 'Downgrade' : 'Upgrade' }}</button>
			        </span>			      	        
        		</div>
			`,
    props: ['plan'],

    data() {
        return {
            active: {}
        };
    },

    created() {
        Event.$on('applied', (msg) => {
            this.active = msg;
            console.log(this.active.name);
        });
    },



    computed: {
        isActive() {
            return this.plan.name == this.active.name;
        },

        isUpgrade() {
            return this.active.price > this.plan.price;
        }
    },

    methods: {
        selectPlan() {
            Event.$emit('applied', this.plan);
        }
    },

});

new Vue({
    el: '#root',
    data: {
        plans: [
            { name: 'Enterprise', price: 100 },
            { name: 'Professional', price: 50 },
            { name: 'Paid', price: 20 },
            { name: 'Free', price: 0 }
        ],
        // active: {}
    },
});
