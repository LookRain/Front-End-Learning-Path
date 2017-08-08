import React, { Component } from 'react'

class Clock extends Component {
  // state = { }
  render () {
    return (
      <div>
        <h1>Hello!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>

    )
  }
}

export default Clock
