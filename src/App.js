import React, { Component } from 'react';
import './App.css';
import Cost from './Components/Cost';
import TimeLeft from './Components/TimeLeft';
import Logo from './Components/Logo';

class App extends Component {
  constructor() {
    super();
    this.state = {
      totalCost: 0,
      timeLeft: 0,
      dailyCost: 0,
    }
  }

  // parse a date in yyyy-mm-dd format
  parseDate(input) {
    var parts = input.match(/(\d+)/g);
    // new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
    return new Date(parts[0], parts[1]-1, parts[2]); // months are 0-based
  }

  updateDailySavings() {
    if (this.state.timeLeft !== 0) {
      this.setState({dailyCost: (this.totalCost / this.timeLeft).toFixed(2)});
    } else {
      this.setState({dailyCost: 0});
    }
  }

  changeCost(newCost) {
    this.totalCost = Math.round(newCost);
    this.setState({totalCost: this.totalCost},
    this.updateDailySavings)
  }

  changeTimeLeft(newTimeLeft) {
    let today = new Date();
    let travelDate = this.parseDate(newTimeLeft);
    let timeDiff = Math.abs(travelDate.getTime() - today.getTime());

    this.timeLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));
    this.setState({timeLeft: this.timeLeft},
    this.updateDailySavings)
  }

  render() {
    return (
      <div className="App">
        <Logo />
        <Cost changeCost={this.changeCost.bind(this)}/>
        <TimeLeft changeTimeLeft={this.changeTimeLeft.bind(this)}/> <br/>
        <div>You have to save £{this.state.totalCost} in the next {this.state.timeLeft} days.<br/>
        You have to save £{this.state.dailyCost} per day.
        </div>
      </div>
    );
  }
}

export default App;
