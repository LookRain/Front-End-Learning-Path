import React, { Component } from 'react';
import Square from './Square'
;
export default class Board extends React.Component {
  constructor () {
    super()
    this.state = {
      squares: Array(9).fill(null),
      xNext: false,
    }
  }

  renderSquare(i) {
    return (
      <Square 
        value={this.state.squares[i]} 
        onClick={() => this.handleClick(i)}
      />)
  }

  handleClick(i) {
    const squares = this.state.squares.slice() //use slice() to copy the array
    const xNext = this.state.xNext
    if (xNext) {
      squares[i] = 'X'
    } else {
      squares[i] = 'O'
    }
    
    this.setState({
      squares: squares,
      xNext: !xNext
    })
  }

  render() {
    const status = `Next player: ${(this.state.xNext ? 'X' : 'O')}`

    return (
      <div>
        <div className="test"></div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}