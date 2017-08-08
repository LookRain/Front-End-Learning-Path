import React, { Component } from 'react'
import {LoginButton, LogoutButton} from './Buttons'
import Greeting from './Greeting'

class LoginControl extends Component {
  state = {
    isLoggedIn: false
  }

  handleLoginClick = () => {
    this.setState({isLoggedIn: true})
  }

  handleLogoutClick = () => {
    this.setState({isLoggedIn: false})
  }

  render () {
    const isLoggedIn = this.state.isLoggedIn

    let button = null
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick}></LogoutButton>
    } else {
      button = <LoginButton onClick={this.handleLoginClick}></LoginButton>
    }

    return (
      <div>
        {button}
        <Greeting isLoggedIn={isLoggedIn}>

        </Greeting>

      </div>
    )
  }
}

export default LoginControl
