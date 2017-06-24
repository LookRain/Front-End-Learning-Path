<template>
<div>
	part 2:
	<p>{{s}}</p>
	<input type="text" v-model="s">
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