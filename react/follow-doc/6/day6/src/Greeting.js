import React, { Component } from 'react'

function Greeting (props) {
  const isLoggedIn = props.isLoggedIn
  if (isLoggedIn) {
    return <h1>Logged In!</h1>
  }
  return <h1>Logged Out!</h1>
}

export default Greeting
