import React from 'react';
import Boldify from '../utils/boldify';
import GetBrightest from '../utils/getbrightest'

class Restaurant extends React.Component {
  render () {
    const restaurant = this.props.restaurant;
    //console.log(restaurant);
    return (
      <li className="restaurant" dangerouslySetInnerHTML={{__html: Boldify(restaurant.name) }}/>
    );
  }
}

export default Restaurant;
