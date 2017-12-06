import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// components
import Client from './Client/Client.js';
import Server from './Server/Server.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">A Game of Three</h1>
        </header>
        <p className="App-intro">
          Intro text goes here.
        </p>
        <p className="App-body">
          <Client className="App-child" />
          <Server className="App-child" />
        </p>
      </div>
    );
  }
}

export default App;
