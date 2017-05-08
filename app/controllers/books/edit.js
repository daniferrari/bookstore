import Ember from 'ember';

export default Ember.Controller.extend({
  author: null,

  actions:
  {
    listAuthors(author){
      this.set('author', author);
    }
  }
});
