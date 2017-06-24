<template>
<div>
	part 1:
	<p>{{s.prop1}}</p>
	<input type="text" v-model="s.prop1">
	<button @click="change"></button>
</div>
</template>
<script>
import store from './store.js'
export default {
  name: 'PartOne',
  data () {
    return {
    	s: store
    }
  },
  methods: {
  	change() {
  		this.user = {
  			name: 'wangba'
  		}
  	}
  }
}
</script>
<style lang="css" scoped>
</style>