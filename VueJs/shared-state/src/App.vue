<template>
<div>
  <part-one></part-one>
  <part-two></part-two>
</div>
</template>
<script>
import PartOne from './PartOne.vue'
import PartTwo from './PartTwo.vue'

export default {
  name: 'App',
  components: { PartOne, PartTwo },
  data () {
    return {
    }
  }
}
</script>
<style lang="css" scoped>
</style>