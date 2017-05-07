import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  
  this.route('books', function() {
    this.route('new');
    this.route('view', { path: '/:book_id/view' });
  });

  this.route('home');

  this.route('authors', function() {
    this.route('new');
    this.route('view');
  });
});

export default Router;
