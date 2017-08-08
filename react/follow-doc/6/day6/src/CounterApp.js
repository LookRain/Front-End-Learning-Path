import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'

class CounterApp extends Component {
  incrementCount = () => {
    this.setState((prevState) => (
      { count: prevState.count + 1 }
    ))
  }

  decrementCount = () => {
    this.setState((prevState) => (
      { count: prevState.count - 1 }
    ))
  }

  incrementCount () {
    this.setState((prevState) => (
      { count: prevState.count + 1 }
    ))
  }

  decrementCount () {
    this.setState((prevState) => (
      { count: prevState.count - 1 }
    ))
  }

  render () {
    return (
      <div className="card">
        <div className="content">
          <div className="header">
            {this.state.count}
          </div>
        </div>

        <button
          className="ui bottom attached button"
          onClick={this.incrementCount}
        >
          +
        </button>

        <button
          className="ui bottom attached button"
          onClick={this.decrementCount}
        >
          -
        </button>
      </div>
    )
  }
}
export default CounterApp
