import Debug from 'debug';
import App from '../../app';

var app;

var attachElement = document.getElementById('app');

var restaurantlistconfig = {
  restaurantlist: {
    title: 'Restaurants',
    url: 'https://api.pimmr.me',
    city: 'Amsterdam',
    start: 0,
    limit: 10,
    restaurants: []
  }
}

Debug.enable('RestaurantApp*');

// Create new app and attach to element
app = new App({
  state: restaurantlistconfig
});

app.renderToDOM(attachElement);



