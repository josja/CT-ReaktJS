import React from 'react';

/*
 * @class Item
 * @extends React.Component
 */
class Restaurant extends React.Component {
  /*
   * @method render
   * @returns {JSX}
   */
  render () {
    return <li className="restaurant">{this.props.restaurant.name} </li>;
  }
}


export default Restaurant;
