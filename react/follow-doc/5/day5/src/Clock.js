import React, { Component } from 'react'

class Clock extends Component {
  constructor (props) {
    super(props)
    this.state = {
      date: new Date()
    }
  }

  /*
    The componentDidMount() hook runs after the component output has been rendered to the DOM. This is a good place to set up a timer:
  */
  componentDidMount () {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUpdate () {
    clearInterval(this.timerID)
  }

  tick () {
    this.setState({
      date: new Date()
    })
  }

  render () {
    return (
      <div>
        <h1>Hello!</h1>
        <h2>It is: {this.state.date.toLocaleTimeString()}.</h2>
      </div>

    )
  }
}

export default Clock
