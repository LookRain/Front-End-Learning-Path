import React, { Component } from 'react'

class NameForm extends Component {
  state = {
    value: ''
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
    })
  }

  handleSubmit = (e) => {
    alert(`Hello you beautiful ${this.state.value}!`)
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
        Name:
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submitt"/>
      </form>
    )
  }
}

class EssayForm extends Component {
  state = {
    value: ''
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  handleSubmit = (e) => {
    alert(`Hello you handsome ${this.state.value}!`)
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
        Name:
        <textarea type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submitt"/>
      </form>
    )
  }
}

class SelectForm extends Component {
  state = {
    value: ''
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  handleClick = (e) => {
    e.preventDefault()
    alert(`You picked ${this.state.value}!`)
  }

  render () {
    return (
      <form>
        <label>
          Pick:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
      <input type="submit" value="Yea" onClick={this.handleClick}/>
      </form>
    )
  }
}

export {NameForm, EssayForm, SelectForm}
