import React from 'react';
import Boldify from '../utils/boldify';


class Restaurant extends React.Component {
  render () {
    return <li className="restaurant" dangerouslySetInnerHTML={{__html: Boldify(this.props.restaurant.name) }}/>;
  }
}

export default Restaurant;
