import React, { Component } from 'react';
import './Server.css';

import GameLogic from '../GameLogic/GameLogic.js';

class Server extends Component {
  render() {
    return (
      <div className="Server">
        <header className="Server-header">
          <h1 className="Server-title">Here comes the server (UI?)</h1>
        </header>
        <p className="Server-intro">
          <GameLogic />
        </p>
      </div>
    );
  }
}

export default Server;
