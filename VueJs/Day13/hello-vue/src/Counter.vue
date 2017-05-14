<template>
  <div>
    <h1>counter app</h1>
    count: {{ test }}
    <br>
    count2: {{ $store.state.count }}
    <br>
    count3: {{ source.count }}
    <br>
    <p id="p1">Hello World!</p>
    <my-form></my-form>
  </div>
</template>


<script>
import source from './source'
import MyForm from './components/MyForm.vue'



  export default {
    components: { MyForm },

    data() {
      return {
        test: 50,
        source
      }
    },
    created() {
       // console.log(123);
     },
    mounted() {
      var foo = 'bar';
var initvalue = 4;
initvalue ++;
// console.log(initvalue);
document.querySelector('#p1').innerHTML = foo;
function myfun() {
  console.log(foo);
}

    }
  }



</script>