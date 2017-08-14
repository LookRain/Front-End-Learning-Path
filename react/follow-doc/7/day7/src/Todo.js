import React, { Component } from 'react'
// import logo from './logo.svg'
// import './App.css'

class Todo extends Component {
  state = {
    tasks: ['one', 'two', 'three'],
    finished: ['f1', 'f2'],
    text: ''
  }
  markComplete = (id) => {
    let t = this.state.tasks[id]

    let tempTasks = this.state.tasks.slice()
    tempTasks.splice(id, 1)

    let tempFinished = this.state.finished.slice()
    tempFinished.push(t)
    this.setState({
      // finished: this.state.finished.slice().push(t),
      tasks: tempTasks,
      finished: tempFinished
    })
    alert(id)
  }
  handleChange = (e) => {
    let input = e.target.value
    // alert(input)
    this.setState({
      text: input
    })
  }
  render () {
    return (
      <div>
        <Header />
        <section className="section">
          <div className="container has-text-centered">
            <TaskInput onChange={this.handleChange}/>
            <TaskHeader />
            {this.state.tasks.map((task, id) => <Task index={id} key={task}>
              <div onClick={() => { this.markComplete(id) }}>{task}</div>
            </Task>)}

            <hr/>
            <FinishedHeader/>
            {this.state.finished.map((task, id) => <FinishedTask index={id} key={task}>
              <div onClick={() => {}}>{task}</div>
            </FinishedTask>)}
          </div>
        </section>
      </div>

    )
  }
}

class TaskInput extends Component {
  state = { }
  render () {
    return (
      <div className="columns">
        <div className="column is-8">
          <TextInput onChange={this.props.onChange}></TextInput></div>
        <div className="column is-2"><div className="button is-primary">Add</div></div>
        <div className="column is-2"><div className="button is-danger">Clear All</div></div>
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
    <section className="hero is-primary">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title">
              R-todo
          </h1>
          <h2 className="subtitle">a todo app based on React.js</h2>
        </div>
      </div>

    </section>
  )
}

class TextInput extends Component {
  state = {

  }

  render () {
    return (
      <input type="text" className="input is-primary" onChange={this.props.onChange}/>
    )
  }
}

function TaskHeader () {
  return (
    <div className="notification is-success">Current Tasks:</div>
  )
}

function FinishedHeader () {
  return (
    <div className="notification is-warning">Finished Taks:</div>
  )
}

export default Todo
