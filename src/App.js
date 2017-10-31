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
      dailySavings: 0,
    }
  }

  // Parse a date in yyyy-mm-dd format
  parseDate(input) {
    var parts = input.match(/(\d+)/g);
    // New Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
    return new Date(parts[0], parts[1]-1, parts[2]); // months are 0-based
  }

  // Update the daily savings value
  updateDailySavings() {
    if (this.state.timeLeft !== 0) {
      this.setState({dailySavings: (this.totalCost / this.timeLeft).toFixed(2)});
    } else {
      this.setState({dailySavings: 0});
    }
  }

  // Update total cost based on user input
  changeCost(newCost) {
    this.totalCost = Math.round(newCost);
    this.setState({totalCost: this.totalCost},
    this.updateDailySavings)
  }

  // Calculate time left between today and departure date (user input)
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
        You have to save £{this.state.dailySavings} per day.
        </div>
      </div>
    );
  }
}

export default App;
