
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