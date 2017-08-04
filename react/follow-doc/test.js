function Greet(props) {
  return <h1>Hi, {props.name}</h1>;
}

function App(props) {
  // let i
  // let result = []
  // for (i = 0; i < 10; i++) {
  //   result.push(<h1 key={i}>Hi, {props.name}</h1>)
  // }
  // return <div>{result}</div>

  return (
    <div>
      {props.numbers.map(number =>
        <h1>Hola, {props.name}!</h1>,
      )}
    </div>
  );
}

function NumberList(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map(number =>
        <li key={number.toString()}>{number}</li>,
      )}
    </ul>
  );
}

// ReactDOM.render((<Greet name="LookRain" />), document.getElementById('root'))
ReactDOM.render((<App time={10} numbers={3} name="LookRain" />), document.getElementById('root'));
// ReactDOM.render((<NumberList numbers={[1,2,3,5]}/>), document.getElementById('root'))
