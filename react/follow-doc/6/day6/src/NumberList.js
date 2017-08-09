import React, { Component } from 'react'

function NumberList (props) {
  const numbers = props.numbers

  // using map() outside JSX
  // const listItems = numbers.map(number => <li key={number.toString()}>{number}</li>)
  // return <ul>{listItems}</ul>

  // using map() inside JSX
  return (
    <ul>
      {numbers.map(number => <li key={number.toString()}>{number}</li>)}
    </ul>
  )
}

export default NumberList
