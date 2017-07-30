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

    if (calculateWinner(squares) || squares[i]) {
      return
    }
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
    const winner = calculateWinner(this.state.squares)
    console.log(winner)
    let status
    if (winner) {
      status = `Winner is: ${winner}!`
    } else {
      status = `Next player: ${(this.state.xNext ? 'X' : 'O')}`
    }


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

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }

    return null;
  }