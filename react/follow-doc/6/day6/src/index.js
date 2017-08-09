import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import CounterApp from './CounterApp'
import Greeting from './Greeting'
import LoginControl from './LoginControl'
import NumberList from './NumberList'
import {NameForm, EssayForm} from './Forms'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  // <div>
  //   <NumberList numbers={[1, 2, 3, 4, 6]}></NumberList>
  // </div>,

  <div>
    <EssayForm></EssayForm>
  </div>,
document.getElementById('root'))
registerServiceWorker()
