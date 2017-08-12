import React, { Component } from 'react'
// import logo from './logo.svg'
// import './App.css'

class Todo extends Component {
  state = {
    tasks: ['one', 'two', 'three'],
    finished: ['f1', 'f2']
  }
  render () {
    return (
      <section className="section">
        <div className="container has-text-centered">
          <Header />
          {this.state.tasks.map(task => <Task task={task} />)}
          <hr/>
          {this.state.finished.map(task => <FinishedTask task={task} />)}
        </div>
      </section>

    )
  }
}

class Task extends Component {
  state = {
    done: false
  }

  render () {
    return (
      <div>
        <p className="notification">{this.props.task}</p>
      </div>
    )
  }
}

class FinishedTask extends Component {
  state = {
    done: false
  }

  render () {
    return (
      <div>
        <p className="notification" style={{textDecoration: 'line-through'}}>{this.props.task}</p>
      </div>
    )
  }
}

function Header () {
  return (
    <section className="hero is-warning">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">
              r-Todo
          </h1>
          <h2 className="subtitle">a todo app based on Vue.js</h2>
        </div>
      </div>

    </section>
  )
}

export default Todo
