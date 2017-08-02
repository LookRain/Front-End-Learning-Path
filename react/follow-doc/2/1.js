function Greet(props) {
  return <h1>Hi, {props.name}</h1>
}

ReactDOM.render((<Greet name="LookRain" />), document.getElementById('root'))