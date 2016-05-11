import { asyncSetPage } from '../actions/AppActions';
import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

/*
 * @class RestaurantList
 * @extends React.Component
 */
class Navigation extends React.Component {

  render() {
    const dispatch = this.props.dispatch;
    const { currentpage, hasmore } = this.props.data;
    return (
      <div className="navigation">
        <Button bsStyle="primary" disabled={currentpage < 1}
          onClick={() => { dispatch(asyncSetPage(currentpage - 1)); }}>Previous</Button>
        <Button bsStyle="primary" disabled={!hasmore}
          onClick={() => { dispatch(asyncSetPage(currentpage + 1)); }}>Next</Button>
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
