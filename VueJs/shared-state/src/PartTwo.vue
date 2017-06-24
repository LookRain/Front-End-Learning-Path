<template>
<div>
	part 2:
	<p>{{s.prop1}}</p>
	<input type="text" v-model="s.prop1">
</div>
</template>
<script>
import store from './store.js'
export default {
  name: 'PartTwo',
  data () {
    return {
    	s: store
    }
  }
}
</script>
<style lang="css" scoped>
</style>