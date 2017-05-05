import Ember from 'ember';

export default Ember.Route.extend({

  model(){
    return this.store.createRecord('book');
  },

  actions:
  {
    saveBook(book){
      book.save().then(() => this.transitionTo('books'));
    }
  }

});
