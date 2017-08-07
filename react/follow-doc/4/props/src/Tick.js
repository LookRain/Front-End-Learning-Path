import React, { Component } from 'react';

function tick() {
  const element = (
    <div>
      <h1>Hello, World!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}


export default tick;
