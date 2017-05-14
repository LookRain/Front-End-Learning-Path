<template>
  <div>
    <h1>counter app</h1>
    count: {{ test }}
    <br>
    count2: {{ $store.state.count }}
  </div>
</template>


<script>
  export default {
    data() {
      return {
        test: 50
      }
    }
  }

</script>