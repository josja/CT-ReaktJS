import React from 'react';
import Debug from 'debug';

/*
 * @class RestaurantList
 * @extends React.Component
 */
class RestaurantNav extends React.Component {
  /*
   * @method render
   * @returns {JSX}
   */
  render () {
    return <div className="restaurantnav">
    <button type="button" disabled={this.props.prevHandler==null} onClick={this.props.prevHandler}>Previous</button>
    <div>{this.props.current}</div>
    <button type="button" disabled={this.props.nextHandler==null} onClick={this.props.nextHandler}>Next</button>
    </div>;
  }
}

export default RestaurantNav;
