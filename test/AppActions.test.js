import expect from 'expect';
import { setRestaurants } from '../src/actions/AppActions';
import { SET_PAGE } from '../src/constants/AppConstants';

// Test actions from AppActions.js
describe('AppActions', () => {
  // Test setRestaurants action
  describe('setRestaurants', () => {
    it('should change restaurants', () => {
      const data = {
        restaurants: ['1', '2', '3'],
        currentpage: 999,
        hasmore: true,
        city: 'Lutjebroek'
      };
      const expectedResult = {
        type: SET_PAGE,
        data
      };
      expect(setRestaurants(data)).toEqual(expectedResult);
    });
  });
});
