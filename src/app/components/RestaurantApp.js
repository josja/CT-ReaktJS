import React from 'react';
//import Cart from './Cart';
import RestaurantList from './RestaurantList';
import config from '../../../config/app';
import Debug from 'debug';

var debug = Debug('RestaurantApp');

/*
 * @class RestaurantApp
 * @extends React.Component
 */
class RestaurantApp extends React.Component {
  /*
   * @constructs RestaurantApp
   * @param {Object} options
   */
  constructor(options) {
    super();
    debug('Construct RestaurantApp with options', options);
    this.state = options.state;
  }

  fetchRestaurants() {
    fetch(this.props.restaurantlist.url, {
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
       jsonrpc: '2.0',
       method: "restaurant.getHighestRated",
       params: [this.props.restaurantlist.city, this.props.restaurantlist.start, this.props.restaurantlist.limit],
       id: 0,
      })
    })
    .then(response => response.json())
    .then(json => {
      this.setState({
        restaurantlist: {
            url: this.props.restaurantlist.url,
            city: this.props.restaurantlist.city,
            start: this.props.restaurantlist.start,
            limit: this.props.restaurantlist.limit,
            title: 'Restaurants in ' + this.props.restaurantlist.city,
            restaurants: json.result
          }
      })
    })
    .catch(err => console.error(err));

  }

  /*
   * @method componentDidMount
   * @returns {JSX}
   */
  componentDidMount() {
    this.fetchRestaurants();
  }

  /*
   * @method render
   * @returns {JSX}
   */
  render () {
    return <div className="appRoot">
      <h1>{config.title}</h1>
      <RestaurantList restaurantlist={this.state.restaurantlist} />
    </div>;
  }
}

RestaurantApp.defaultProps = {
  restaurantlist: {
    url: 'https://api.pimmr.me',
    city: 'Amsterdam',
    start: 0,
    limit: 10
  }
};

export default RestaurantApp;

