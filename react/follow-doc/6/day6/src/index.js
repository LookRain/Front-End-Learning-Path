import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import CounterApp from './CounterApp'
import Greeting from './Greeting'
import LoginControl from './LoginControl'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <div>
    <LoginControl></LoginControl>
  </div>,
document.getElementById('root'))
registerServiceWorker()
