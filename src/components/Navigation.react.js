import { asyncSetPage } from '../actions/AppActions';
import React, { Component } from 'react';
import { connect } from 'react-redux';

/*
 * @class RestaurantList
 * @extends React.Component
 */
class Navigation extends React.Component {

  render () {
    const dispatch = this.props.dispatch;
    const { currentpage, hasmore } = this.props.data;
    return (
      <div className="navigation">
        <button type="button" disabled={currentpage < 1}
          onClick={() => { dispatch(asyncSetPage(currentpage-1)); }}>Previous</button>
        <div>{ currentpage }</div>
        <button type="button" disabled={!hasmore}
          onClick={() => { dispatch(asyncSetPage(currentpage+1)); }}>Next</button>
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
export default connect(select)(Navigation);
