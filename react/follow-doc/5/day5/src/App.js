import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'
import Clock from './Clock'

class App extends Component {
  render () {
    return (
      <Clock date={new Date()}></Clock>
    )
  }
}

export default App
