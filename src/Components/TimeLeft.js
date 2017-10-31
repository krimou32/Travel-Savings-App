import React, { Component } from 'react';

class TimeLeft extends Component {
  handleChange(e) {
      const newTimeLeft = e.target.value;
      this.props.changeTimeLeft(newTimeLeft);
  }

  render() {
    return (
      <div className="calculator">
          <h2>When are you tarveling?</h2>
          <input type="date" onChange={this.handleChange.bind(this)}></input>
      </div>
    );
  }
}

export default TimeLeft;
