import React, { Component } from 'react'
import {LoginButton, LogoutButton} from './Buttons'
import Greeting from './Greeting'

class LoginControl extends Component {
  state = {
    isLoggedIn: false,
    value: '',
    shouldShow: true
  }

  handleLoginClick = () => {
    this.setState({isLoggedIn: true})
  }

  handleLogoutClick = () => {
    this.setState({isLoggedIn: false})
  }

  handleChange = (e) => {
    this.setState({value: e.target.value})
  }

  handleToggle = (e) => {
    console.log(e.target.checked)
    this.setState({shouldShow: e.target.checked})
  }

  render () {
    const isLoggedIn = this.state.isLoggedIn
    /*
      Approach 1: Basic Conditional Rendering
    */
    // let button = null
    // if (isLoggedIn) {
    //   button = <LogoutButton onClick={this.handleLogoutClick}></LogoutButton>
    // } else {
    //   button = <LoginButton onClick={this.handleLoginClick}></LoginButton>
    // }

    // return (
    //   <div>
    //     {button}
    //     <Greeting isLoggedIn={isLoggedIn} />>

    //   </div>
    // )

    /*
      Approach 2: Inline if else
    */
    // return (
    //   <div>
    //     <Greeting isLoggedIn={isLoggedIn} />
    //     {
    //       isLoggedIn ? (
    //         <LogoutButton onClick={this.handleLogoutClick}></LogoutButton>
    //       ) : (
    //         <LoginButton onClick={this.handleLoginClick}></LoginButton>
    //       )
    //     }
    //   </div>
    // )

    /*
      Approach 3: Inline if using &&
      It works because in JavaScript, true && expression always evaluates to expression, and false && expression always evaluates to false
    */
    return (
      <div>
        <h1>{this.state.value}</h1>
        {this.state.value &&
        <h2>Indeed something is in the input box...</h2>}
        <input type="text" value={this.state.value} onChange={this.handleChange}/>

        <input type="checkbox" checked={this.state.shouldShow} onChange={this.handleToggle} />

        <Greeting isLoggedIn={isLoggedIn} shouldShow={this.state.shouldShow} />
        {
          isLoggedIn ? (
            <LogoutButton onClick={this.handleLogoutClick}></LogoutButton>
          ) : (
            <LoginButton onClick={this.handleLoginClick}></LoginButton>
          )
        }
      </div>
    )
  }
}

export default LoginControl
