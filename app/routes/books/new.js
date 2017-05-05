import Ember from 'ember';

export default Ember.Route.extend({

  model(){
  return Ember.RSVP.hash({
    books: this.store.createRecord('book'),
    authors: this.store.findAll('author')
    })
  },

  actions:
  {
    saveBook(book){
      book.save().then(() => this.transitionTo('books'));
    }
  }

});
