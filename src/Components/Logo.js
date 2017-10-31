import React, { Component } from 'react';
import img from '../logo-char.png';

class Logo extends Component {

  render() {
    return (
      <img className='logo' src={img} />
    );
  }
}

export default Logo;
