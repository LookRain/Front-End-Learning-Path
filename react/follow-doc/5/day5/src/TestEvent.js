import React, { Component } from 'react'

class TestEvent extends Component {
  render () {
    return (
      <a href="#" onClick={this.handleClick}>Click me</a>
    )
  }

  // Use preventDefault
  handleClick (e) {
    e.preventDefault()
    alert('lalala')
  }
}

export default TestEvent
