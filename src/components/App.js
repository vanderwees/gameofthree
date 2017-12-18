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
    const { store } = this.props;

    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">A Game of Three</h1>
          </header>
          <div className="App-intro">
            Intro text goes here.
          </div>
          <div className="App-body">
            <Card className="Client-Card">
              <Client
                store={this.props.store}
                currentValue={store.getState()}
                winner={store.getState()}
                playerID={store.getState()}
                dispatch={store.dispatch}
                />
            </Card>
            <Card className="Server-Card">
              <Server />
            </Card>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

static contextTypes = {
  store: PropTypes.object.isRequired
}

export default App;
