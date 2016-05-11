import { asyncSetPage } from '../actions/AppActions';
import React from 'react';
import { connect } from 'react-redux';
import Restaurant from './Restaurant.react';
import Navigation from './Navigation.react';

class Restaurants extends React.Component {

  componentDidMount() {
    // On mount, load first page async
    this.props.dispatch(asyncSetPage(0));
  }

  render() {
    const { restaurants } = this.props.data;
    return (
      <div className="restaurants">
        <Navigation/>
        <ul>
          {restaurants.map( (item, key) => {
            return <Restaurant key={key} restaurant={item} />;
          })}
        </ul>
        <Navigation/>
      </div>
    );
  }
}

// REDUX
function select(state) {
  return {
    data: state
  };
}
export default connect(select)(Restaurants);
