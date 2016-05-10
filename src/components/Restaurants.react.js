import { asyncSetPage } from '../actions/AppActions';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Restaurant from './Restaurant.react';
import Navigation from './Navigation.react';

class Restaurants extends React.Component {

  componentDidMount() {
    // On mount, load first page async
    this.props.dispatch(asyncSetPage(0));
  }

  render() {
    const dispatch = this.props.dispatch;
    const { restaurants, city } = this.props.data;
    return (

      <div className="restaurants">
        <h2>Restaurants in { city }</h2>
        <Navigation/>
        <ul>
          {restaurants.map(function (item, key) {
            return <Restaurant key={key} restaurant={item} />;
          })}
        </ul>
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
