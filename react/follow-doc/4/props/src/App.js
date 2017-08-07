import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tick from './Tick';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default App;
