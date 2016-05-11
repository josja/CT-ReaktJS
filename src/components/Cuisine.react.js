import React from 'react';
import { Label } from 'react-bootstrap';

class Cuisine extends React.Component {
  getRandomColor() {
    const letters = '3456789A'.split('');
    let color = '#';
    let i = 0;
    for (; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * 8)];
    }
    return color;
  }

  render() {
    const divStyle = {
      backgroundColor: this.getRandomColor()
    };
    return (
      <Label style={divStyle}>{ this.props.cuisine }</Label>
    );
  }
}

export default Cuisine;
