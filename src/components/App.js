import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Card from 'material-ui/Card';

import logo from './logo.svg';
import './App.css';

// components
import Client from './Client/Client.js';
import Server from './Server/Server.js';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">A Game of Three</h1>
          </header>
          <p className="App-intro">
            Intro text goes here.
          </p>
          <p className="App-body">
            <Card className="Client-Card">
              <Client />
            </Card>
            <Card className="Server-Card">
              <Server />
            </Card>
          </p>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
