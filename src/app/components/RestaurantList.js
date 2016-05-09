import React from 'react';
import Restaurant from './Restaurant';
import Debug from 'debug';

var debug = Debug('RestaurantApp');

/*
 * @class RestaurantList
 * @extends React.Component
 */
class RestaurantList extends React.Component {
  /*
   * @method render
   * @returns {JSX}
   */
  render () {
    return <div className="restaurantlist">
      <h2>{this.props.restaurantlist.title}</h2>
      <ul>
        {this.props.restaurantlist.restaurants.map(function (item, key) {
          return <Restaurant key={key} restaurant={item} />;
        })}
      </ul>
    </div>;
  }
}

export default RestaurantList;
