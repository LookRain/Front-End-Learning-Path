function Greet(props) {
  return <h1>Hi, {props.name}</h1>
}

function App(props) {
  let i
  let result = []
  for (i = 0; i < 10; i++) {
    result.push(<h1 key={i}>Hi, {props.name}</h1>)
  }
  return <div>{result}</div>
}

// ReactDOM.render((<Greet name="LookRain" />), document.getElementById('root'))
ReactDOM.render((<App time={10} name="LookRain"/>), document.getElementById('root'))