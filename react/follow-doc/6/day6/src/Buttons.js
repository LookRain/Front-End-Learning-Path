import React from 'react'

function LoginButton (props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  )
}

function LogoutButton (props) {
  return (
    <button onClick={props.onClick}>
      Log Out
    </button>
  )
}

export {LoginButton, LogoutButton}
