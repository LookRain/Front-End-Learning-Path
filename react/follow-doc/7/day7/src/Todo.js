import React, { Component } from 'react'
// import logo from './logo.svg'
// import './App.css'

class Todo extends Component {
  state = {
    tasks: ['one', 'two', 'three'],
    finished: ['f1', 'f2']
  }
  markComplete = (id) => {
    let t = this.state.tasks[id]

    let tempTasks = this.state.tasks.slice()
    tempTasks.splice(id, 1)
    this.setState({
      // finished: this.state.finished.slice().push(t),
      tasks: tempTasks
    })
    alert(id)
  }
  render () {
    return (
      <section className="section">
        <div className="container has-text-centered">
          <Header />
          {this.state.tasks.map((task, id) => <Task index={id} key={task}>
            <div onClick={() => { this.markComplete(id) }}>{task}</div>
          </Task>)}
          <hr/>
          {this.state.finished.map((task, id) => <FinishedTask index={id} key={task}>
            <div onClick={() => { this.markComplete(id) }}>{task}</div>
          </FinishedTask>)}
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

      <div className="notification" style={{marginBottom: '0.2rem'}}>{this.props.children}</div>

    )
  }
}

class FinishedTask extends Component {
  state = {
    done: true
  }

  render () {
    return (

      <div className="notification"
        style={{
          textDecoration: 'line-through',
          marginBottom: '0.2rem'}
        }>
        {this.props.children}
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
