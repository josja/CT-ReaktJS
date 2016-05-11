/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { Component } from 'react';
import Restaurants from './Restaurants.react';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Restaurants />
      </div>
    );
  }
}

export default App;
