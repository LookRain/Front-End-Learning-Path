<template>
  <div id="app">
    <message>Hello from the other side!</message>
    <message>Hello from the other side!</message>
    <message>Hello from the other side!</message>
    
  </div>
</template>

<script>
import Message from './components/Message.vue';

export default {
  name: 'app',
  components: { Message },
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
