new Vue({
	el: '#root',
	data: {
		plans: [
			{ name: 'Enterprise', price: 100 },
			{ name: 'Professional', price: 50 },
			{ name: 'Paid', price: 20 },
			{ name: 'Free', price: 0 }
		],
		active: {}
	},
	
	components: {
		plan: {
			template: `
				<div>
			        <span class="plan-name">{{ plan.name }}</span>
			        <span class="plan-price">{{ plan.price }}/Month</span>
	
			        <span v-if="isActive">
			        	Current Plan
			        </span>
			     
			        <span class="v-else">
			        	<button@click="selectPlan" class="button is-primary">{{ isUpgrade ? 'Upgrade' : 'Downgrade' }}</button>
			        </span>
			        
			        
        		</div>
			`,
			props: ['plan', 'active'],

		

			computed: {
                isActive() {
                    return this.plan.name == this.active.name;
                },

                isUpgrade() {
                    return this.plan.price > this.active.price;
                }
            },

			methods: {
				selectPlan() {
					this.active = this.plan;
				}
			}
		}	
	}
});