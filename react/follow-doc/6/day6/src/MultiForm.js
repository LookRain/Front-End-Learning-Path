import React, { Component } from 'react'

class MultiForm extends Component {
  state = {
    isGoing: false,
    numberOfGuests: 0
  }

  handleChange = (e) => {
    const target = e.target
    const value = target.type === 'number' ? target.value : target.checked
    const name = target.name

    this.setState({
      [name]: value
    })
  }
  render () {
    return (
      <div>
        <form>
          <label>
            Is going:
          <input type="checkbox" name="isGoing" checked={this.state.isGoing} onChange={this.handleChange} />
          </label>
          <hr />
          <label>
            Number of guests:
          <input type="number" name="numberOfGuests" value={this.state.numberOfGuests} onChange={this.handleChange} />
          </label>
        </form>

        <hr/>
        <div>{ this.state.numberOfGuests } guests are { !this.state.isGoing ? 'not' : '' } going. </div>
      </div>
    )
  }
}

export default MultiForm
