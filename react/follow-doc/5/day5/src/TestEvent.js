import React, { Component } from 'react'

class TestEvent extends Component {
  constructor (props) {
    super(props)

    this.state = {
      status: true
    }
    // MUST USE BIND to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this)
  }

  render () {
    return (
      <div><p>{this.state.status ? 'On' : 'Off'}</p>
      <button onClick={this.handleClick}>Toggle</button>
      </div>
    )
  }

  // Use preventDefault
  handleClick () {
    this.setState(prevState => (
      {
        status: !prevState.status
      }
    ))
  }
}

export default TestEvent
