import React, { Component } from 'react'
// import logo from './logo.svg'
// import './App.css'

class Todo extends Component {
  state = {
    tasks: ['one', 'two', 'three'],
    finished: ['f1', 'f2'],
    input: ''
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
    // alert(id)
  }
  handleChange = (e) => {
    let input = e.target.value
    // alert(input)
    this.setState({
      input: input
    })
  }
  addTask = () => {
    let tempTasks = this.state.tasks.slice()
    tempTasks.push(this.state.input)
    this.setState({
      tasks: tempTasks,
      input: ''
    })
    this.clearInput()
  }
  clearInput = () => {
    this.setState({
      input: ''
    })
  }
  clearAll = () => {
    // alert('clearing')
    this.setState({
      tasks: [],
      finished: [],
      input: ''
    })
  }
  handleClick = (e) => {
    e.target.getAttribute('name') === 'add' && this.addTask()
    e.target.getAttribute('name') === 'clear' && this.clearAll()
  }
  handleKeyPress = (e) => {
    e.key === 'Enter' && this.addTask()
  }

  handleDelete = (id) => {
    let tempFinished = this.state.finished.slice(id, id + 1)
    this.setState({
      finished: tempFinished
    })
  }

  render () {
    return (
      <div>
        <Header />
        <section className="section">
          <div className="container has-text-centered">
            <TaskInput onChange={this.handleChange} onClick={this.handleClick} inputValue={this.state.input} onKeyPress={this.handleKeyPress} />
            <TaskHeader />

            {this.state.tasks.map((task, id) =>
            <Task key={id} onClick={() => { this.markComplete(id) }}>
              {task}
            </Task>)}

            <hr/>
            <FinishedHeader/>
            {this.state.finished.map((task, id) => <FinishedTask key={id} onDelete={() => { this.handleDelete(id) }}>
              <div>{task}</div>
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
          <TextInput onChange={this.props.onChange} inputValue={this.props.inputValue} onKeyPress={this.props.onKeyPress}></TextInput></div>
        <div className="column is-2"><div className="button is-primary" name="add" onClick={this.props.onClick}>Add</div></div>
        <div className="column is-2"><div className="button is-danger" name="clear" onClick={this.props.onClick}>Clear All</div></div>
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

      <div className="notification" style={{marginBottom: '0.5rem'}} onClick={this.props.onClick}>{this.props.children}</div>

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
        <span>{this.props.children}</span><DeleteButton onDelete={this.props.onDelete} />
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
      <input type="text" className="input is-primary" onChange={this.props.onChange} value={this.props.inputValue} onKeyPress={this.props.onKeyPress}/>
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

function DeleteButton (props) {
  return (
    <button className="delete is-danger" style={{top: '1.5em'}} onClick={props.onDelete}></button>
  )
}

export default Todo
