<template>
<div>
	part 1:
	<p>{{s}}</p>
	<input type="text" v-model="s">
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