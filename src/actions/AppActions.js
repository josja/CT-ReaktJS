// Disable the no-use-before-define eslint rule for this file
// It makes more sense to have the asnyc actions before the non-async ones
/* eslint-disable no-use-before-define */

import { APICONFIG, SET_PAGE } from '../constants/AppConstants';

export function asyncSetPage(page) {
  return (dispatch) => {
    const limit = APICONFIG.limit + 1; // Over-fetch to detect 'hasmore'
    const start = page * APICONFIG.limit;
    fetch(APICONFIG.url, {
      method: 'post',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        method: 'restaurant.getHighestRated',
        params: [APICONFIG.city, start, limit],
        id: 0,
      })
    })
    .then(response => response.json())
    .then(json => {
      const count = Object.keys(json.result).length;
      const hasmore = (count > APICONFIG.limit);
      if (hasmore) json.result.pop(); // Remove the 'hasmore' detector
      return dispatch(setRestaurants({
        restaurants: json.result,
        hasmore: hasmore,
        currentpage: page,
        city: APICONFIG.city
      }));
    })
    .catch();
  };
}

export function setRestaurants(data) {
  return { type: SET_PAGE, data };
}
