import React, { Component } from 'react';

class Cost extends Component {
  handleChange(e) {
    const newCost = e.target.value;
    this.props.changeCost(newCost);
  }

  render() {
    return (
      <div className="calculator">
          <h2>Enter Travel cost:</h2>
          <input type="number" onChange={this.handleChange.bind(this)} />
      </div>
    );
  }
}

export default Cost;
