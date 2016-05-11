import expect from 'expect';
import restaurantsReducer from '../src/reducers/restaurantsReducer';
import * as constants from '../src/constants/AppConstants';

// Test Reducer
describe('defaultReducer', () => {

  // Test that the initial state is returning correctly
  it('should return the initial state', () => {
    expect(restaurantsReducer(undefined, {})).toEqual({
      restaurants: [],
      currentpage: 0,
      hasmore: false,
      city: ""
    });
  });

  // Test that it handles changing the page correctly
  it('should handle the set page action', () => {
    const data = {
        restaurants: ["1","2","3"],
        currentpage: 999,
        hasmore: true,
        city: "Lutjebroek"
      };

    expect(
      restaurantsReducer({}, {
        type: constants.SET_PAGE,
        data
      })
    ).toEqual({
        restaurants: ["1","2","3"],
        currentpage: 999,
        hasmore: true,
        city: "Lutjebroek"
    });
  });
});
