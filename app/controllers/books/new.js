import Ember from 'ember';

export default Ember.Controller.extend({
  author: null,

  actions:
  {
    teste(author){
      this.set('author', author);
    }
  }
});
