import React, { Component } from 'react'

class TestEvent extends Component {
  state = {
    status: true
  }

  render () {
    return (
      <div><p>{this.state.status ? 'On' : 'Off'}</p>
      <button onClick={this.handleClick}>Toggle</button>
      </div>
    )
  }

  // Use preventDefault
  handleClick = () => {
    this.setState(prevState => (
      {
        status: !prevState.status
      }
    ))
  }
}

export default TestEvent
