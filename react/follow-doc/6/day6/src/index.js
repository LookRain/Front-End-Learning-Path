import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import CounterApp from './CounterApp'
import Greeting from './Greeting'
import LoginControl from './LoginControl'
import NumberList from './NumberList'
import {NameForm, EssayForm, SelectForm} from './Forms'
import MultiForm from './MultiForm'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  // <div>
  //   <NumberList numbers={[1, 2, 3, 4, 6]}></NumberList>
  // </div>,

  <div>
    <MultiForm></MultiForm>
  </div>,
document.getElementById('root'))
registerServiceWorker()
