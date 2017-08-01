let currentdate = new Date();

function tick() {
  ReactDOM.render(
    (<div>
      <h1>Hello, world!</h1>
      <h3>It is {new Date().toLocaleTimeString()}.</h3>
    </div>),
    document.getElementById('root')
  );
}

setInterval(tick, 1000)

/*
Vue copy:

function baz() {
alert("sdf")
}
new Vue({
  el: '#root',
  data: {time: 'ddtest'},
  methods: {
    test() {
      this.time = new Date().toLocaleTimeString()
    }
  },
  mounted() {
    setInterval(this.test, 1000)
  }
})


*/