import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';

import { connect } from 'react-redux';

import './Client.css';

/*
value={store.getState()}
onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
*/

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
    const { store, playerID, currentValue } = this.props;

    const styles = {
      button: {
        margin: '12px'
      },
      ball: {
        margin: '12px'
      }
    };
    console.log(store.getState(), currentValue);

    return (
      <div className="Client">
        <AppBar
           title={ playerID ? "Player " + playerID : "Setup game" }
         />
       <div className="Client-intro">
            { /* We're abusing Avatar component a bit, as it is just what we needed */ }
            <Avatar
            color="#fff"
            backgroundColor="#F18723"
            size={200}
            style={styles.ball}
          >
            { this.context.store.getState() }
          </Avatar>

          <h2>Add one, remove one or do nothing?</h2>
          <RaisedButton primary={true} style={styles.button} onClick={ () => this.props.dispatch({ type: 'DECREMENT' }) } label="Remove one" />
          <RaisedButton style={styles.button} onClick={ () => { this.setValue(this.getNextValue(0)) } } label="It's ok"/>
          <RaisedButton primary={true} style={styles.button} onClick={ () => { this.props.dispatch({ type: 'INCREMENT' }); } } label="Add one"/>

          <br/>
          {
            this.state.winner &&
              <strong>Winner</strong>
          }
          {
            this.state.winner
          }
        </div>
      </div>
    );
  }
}

Client.contextTypes = {
  store: PropTypes.object.isRequired
}

Client = connect()(Client);

export default Client;
