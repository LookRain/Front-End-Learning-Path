<template>
  <div>
    <h1>counter app</h1>
    count: {{ test }}
    <br>
    count2: {{ $store.state.count }}
    <br>
    count3: {{ source.count }}
  </div>
</template>


<script>
import source from './source'
  export default {
    data() {
      return {
        test: 50,
        source
      }
    }
  }

</script>