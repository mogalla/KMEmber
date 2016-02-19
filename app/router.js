import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home');
  this.route('helpcontent');
  this.resource('helpcontent', { path: '/helpcontent/:category' });
});

export default Router;
