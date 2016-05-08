import React from 'react';
import ReactDOM from 'react-dom';
import Debug from 'debug';
import RestaurantApp from './components/RestaurantApp';

var debug = Debug('RestaurantApp');

/*
 * @class App
 */
class App extends React.Component {

  /*
   * @constructs App
   * @param {Object} options
   */
  constructor(options) {
    super();
    debug('Construct App with options', options);
    this.state = options.state;
  }

  /*
   * @method render
   * @param {DOM} [element]
   * @returns {String|undefined}
   */
  render (element) {
    debug('App.render: state', this.state);

    var restaurantAppElement = React.createElement(RestaurantApp, {
      state: this.state
    });

    // Rendering
    if(element) {
      debug('To DOM');
      ReactDOM.render(restaurantAppElement, element);
      return;
    }
    debug('To string');
    return React.renderToString(restaurantAppElement);
  }

  /*
   * @method render
   * @param {DOM} element
   */
   renderToDOM (element) {
    if(!element) {
      return debug(new Error('App.renderToDOM: need element'));
    }

    this.render(element);
   }

  /*
   * @method renderToString
   * @returns {String}
   */
   renderToString () {
    return this.render();
  }
}

export default App;
