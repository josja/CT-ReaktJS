// Disable the no-use-before-define eslint rule for this file
// It makes more sense to have the asnyc actions before the non-async ones
/* eslint-disable no-use-before-define */

import { APICONFIG, SET_PAGE } from '../constants/AppConstants';

export function asyncSetPage(page) {
  return (dispatch) => {
    var limit = APICONFIG.limit+1; //< Over-fetch to detect 'hasmore'
    var start = page * APICONFIG.limit;
    fetch(APICONFIG.url, {
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
       jsonrpc: '2.0',
       method: "restaurant.getHighestRated",
       params: [APICONFIG.city, start, limit],
       id: 0,
      })
    })
    .then(response => response.json())
    .then(json => {
      var count = Object.keys(json.result).length;
      var hasmore = (count > APICONFIG.limit);
      if (hasmore) json.result.pop(); //< Remove the 'hasmore' detector
      return dispatch(setRestaurants({
        restaurants: json.result,
        hasmore: hasmore,
        currentpage: page,
        city: APICONFIG.city
      }));
    })
    .catch(err => console.error('Could not fetch restaurants'));
  };
}

export function setRestaurants(restaurants) {
  return { type: SET_PAGE, restaurants };
}

