import React from 'react';
import RestaurantList from './components/RestaurantList';
import RestaurantNav from './components/RestaurantNav';
import config from '../../config/app';
import Debug from 'debug';

var debug = Debug('RestaurantApp');

/*
 * @class RestaurantApp
 * @extends React.Component
 */
class App extends React.Component {
  /*
   * @constructs RestaurantApp
   * @param {Object} options
   */
  constructor(options) {
    super();
    debug('Construct App with options', options);
    this.state = options;
  }

  fetchRestaurants(page) {
    var limit = this.state.restaurantlist.limit+1;
    var start = page * this.state.restaurantlist.limit;
    fetch(this.state.restaurantlist.url, {
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
       jsonrpc: '2.0',
       method: "restaurant.getHighestRated",
       params: [this.state.restaurantlist.city, start, limit],
       id: 0,
      })
    })
    .then(response => response.json())
    .then(json => {
      var count = Object.keys(json.result).length;
      var haspreviouspage = (start > 0);
      var hasnextpage = (count > this.state.restaurantlist.limit);
      if (hasnextpage) json.result.pop(); // remove last
      console.log(start);
      this.setState({
        restaurantlist: {
            url: this.state.restaurantlist.url,
            city: this.state.restaurantlist.city,
            start: start,
            limit: this.state.restaurantlist.limit,
            title: 'Restaurants in ' + this.state.restaurantlist.city,
            restaurants: json.result
          },
        prevhandler: haspreviouspage ? this.onPrevPageHandler.bind(this) : null,
        nexthandler: hasnextpage ? this.onNextPageHandler.bind(this) : null,
        hasmore: hasnextpage,
        currentpage: page
      })
    })
    .catch(err => console.error('Could not fetch restaurants'));

  }

  /*
   * @method componentDidMount
   * @returns {JSX}
   */
  componentDidMount() {
    this.fetchRestaurants(this.state.currentpage);
  }

  onPrevPageHandler() {
    if (this.state.currentpage > 0)
      this.fetchRestaurants(this.state.currentpage - 1);
  }

  onNextPageHandler() {
    if (this.state.hasmore)
      this.fetchRestaurants(this.state.currentpage + 1);
  }

  /*
   * @method render
   * @returns {JSX}
   */
  render() {
    return <div className="appRoot">
      <h1>{config.title}</h1>
      <RestaurantNav current={this.state.currentpage} prevHandler={this.state.prevhandler} nextHandler={this.state.nexthandler}  />
      <RestaurantList restaurantlist={this.state.restaurantlist} />
    </div>;
  }
}

App.defaultProps = {
  currentpage: 0,
  hasmore: false,
  restaurantlist: {
    url: 'https://api.pimmr.me',
    city: 'Amsterdam',
    start: 0,
    limit: 5,
    restaurants: []
  },
  prevhandler: false,
  nexthandler: false
};

export default App;

