import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import CounterApp from './CounterApp'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<CounterApp />, document.getElementById('root'))
registerServiceWorker()
