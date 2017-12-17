import React, { Component } from 'react';

import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';

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
      },
      ball: {
        margin: '12px'
      }
    };

    return (
      <div className="Client">
        <header className="Client-header">
          <AppBar
             title={ this.state.playerID ? "Player " + this.state.playerID : "Setup game" }
           />
        </header>
        <p className="Client-intro">
            { /* We're abusing Avatar component a bit, as it is just what we needed */ }
            <Avatar
            color={'#000'}
            backgroundColor={'#fff'}
            size={200}
            style={styles.ball}
          >
            X
          </Avatar>

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
