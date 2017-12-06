import React, { Component } from 'react';

/**
* GameLogic.
*
* This class serves as a component calculating the game logic,
* and keeping the current player state.
*/
class GameLogic extends Component {


  constructor(props) {
    super(props);
    this.state = {
      currentValue: null,
      winner: null
    };
  }

  componentDidMount() {
    // no game started, let's start one (for now)
    if (this.state.winner == null && this.state.currentValue == null) {
      this.setNewGame();
    }
  }

  setNewGame() {
    this.setState({
      currentValue: 17, //TODO: random number here
      winner: null
    })
  }

  getValue() {
    return this.state.currentValue;
  }

  // Calculates the next step, i.e. divides by three
  getNextValue(modifier) {
    let returnValue = false;
    if (modifier) {// TODO check
      returnValue = Math.floor((this.state.currentValue + modifier) / 3);
    }
    return returnValue;
  }

  // So we've calculated the new value, and now we can save/play it.
  setValue(newValue) {
    let winner = null;
    if (newValue === 1) {
      winner = 'Piet';
    }
    if (newValue) {
      this.setState({
        currentValue: newValue,
        winner: winner
      });
    }

  }


  render() {
    return (
      <div className="GameLogic">
        <p className="GameLogic-intro">
          DEBUG CONSOLE<br/>
          {
            this.getValue()
          }
            <br />
          {
            this.getNextValue(-1)
          }
          <button onClick={ () => { this.setValue(this.getNextValue(-1)) } }>-1</button>
          <button onClick={ () => { this.setValue(this.getNextValue(0)) } }>0</button>
          <button onClick={ () => { this.setValue(this.getNextValue(1)) } }>+1</button>
          <br/>
          <strong>Winner</strong>
          {
            this.state.winner
          }
        </p>
      </div>
    );
  }
}

export default GameLogic;
