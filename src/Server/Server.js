import React, { Component } from 'react';
import './Server.css';

import AppBar from 'material-ui/AppBar';

import GameLogic from '../GameLogic/GameLogic.js';

class Server extends Component {
  render() {
    return (
      <div className="Server">
        <AppBar
           title="Server"
         />
        <h1 className="Server-title">Here comes the server (UI?)</h1>
        <p className="Server-intro">
          <GameLogic />
        </p>
      </div>
    );
  }
}

export default Server;
