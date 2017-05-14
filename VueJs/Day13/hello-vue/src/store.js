import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const globalstore = new Vuex.Store({
	state: {
		count: 5
	}
});

export default globalstore