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
    if (newValue) {
      this.setState({currentValue: newValue});
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
        </p>
      </div>
    );
  }
}

export default GameLogic;
