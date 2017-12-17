import React, { Component } from 'react';

import RaisedButton from 'material-ui/RaisedButton';

import './Client.css';

class Client extends Component {

  constructor(props) {
    super(props);
    this.state = {
      playerID: null,
      currentValue: null,
      winner: null
    };
  }

  render() {
    const styles = {
      button: {
        margin: '12px'
      }
    };

    return (
      <div className="Client">
        <header className="Client-header">
          <h1 className="Client-title">Player { this.state.playerID } </h1>
        </header>
        <p className="Client-intro">
          <div className="CurrentValueBox">
            <p>
              {
                this.state.currentValue || 'X'
              }
            </p>
          </div>
          <h2>Add one, remove one or do nothing?</h2>
          <RaisedButton primary={true} style={styles.button} onClick={ () => { this.setValue(this.getNextValue(-1)) } } label="Remove one" />
          <RaisedButton style={styles.button} onClick={ () => { this.setValue(this.getNextValue(0)) } } label="It's ok"/>
          <RaisedButton primary={true} style={styles.button} onClick={ () => { this.setValue(this.getNextValue(1)) } } label="Add one"/>

          <br/>
          {
            this.state.winner &&
              <strong>Winner</strong>
          }
          {
            this.state.winner
          }
        </p>
      </div>
    );
  }
}

export default Client;
