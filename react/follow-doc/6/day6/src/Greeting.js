import React, { Component } from 'react'

function Greeting (props) {
  const isLoggedIn = props.isLoggedIn
  const shouldShow = props.shouldShow
  if (!shouldShow) {
    return null
  }
  if (isLoggedIn) {
    return <h1>Hi! Logged In!</h1>
  }
  return <h1>Hi! Logged Out!</h1>
}

export default Greeting
