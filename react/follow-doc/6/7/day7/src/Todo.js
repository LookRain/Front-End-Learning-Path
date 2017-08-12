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
      <div>
        <Header />
        {this.state.tasks.map(task => <Task task={task}/>)}
      </div>

    )
  }
}

class Task extends Component {
  state = {
    done: false
  }

  render () {
    return (
      <p>{this.props.task}</p>
    )
  }
}

function Header () {
  return (
    <section className="hero is-primary">
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
