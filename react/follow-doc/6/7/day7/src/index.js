import React from 'react'
import ReactDOM from 'react-dom'
import 'bulma/css/bulma.css'
import Todo from './Todo'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<Todo />, document.getElementById('root'))
registerServiceWorker()
