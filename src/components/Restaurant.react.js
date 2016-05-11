import React from 'react';
import boldify from '../utils/boldify';
import Cuisine from './Cuisine.react';
import { Jumbotron } from 'react-bootstrap';

class Restaurant extends React.Component {
  render() {
    const restaurant = this.props.restaurant;
    const divStyle = {
      backgroundImage: 'url(' + restaurant.photos[0].s3URL + ')'
    };
    return (
      <li style={divStyle}>
        <Jumbotron>
          <h1 dangerouslySetInnerHTML={{__html: boldify(restaurant.name) }}></h1>
          { restaurant.cuisines.map( (item, key) => {
            return <Cuisine key={key} cuisine={item} />;
          })}
        </Jumbotron>
      </li>
    );
  }
}

export default Restaurant;

