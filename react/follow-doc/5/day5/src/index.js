import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import Clock from './Clock'

/*
  1st approach
*/
// function tick () {
//   ReactDOM.render(
//     <Clock date={new Date()}></Clock>,
//     document.getElementById('root')
//   )
// }

// setInterval(tick, 1000)

/*
  2nd approach
*/
ReactDOM.render(
  <Clock />,
  document.getElementById('root')
)

registerServiceWorker()
