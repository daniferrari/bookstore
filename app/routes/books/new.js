import Ember from 'ember';

export default Ember.Route.extend({

  model(){
  return Ember.RSVP.hash({
    book: this.store.createRecord('book'),
    authors: this.store.findAll('author')
    })
  },

  actions: {

  saveBook(newBook){
    let authorId = this.controller.get('author');
    let author = this.get('store').peekRecord('author', authorId);
    newBook.set('author', author);
    newBook.save().then(() => this.transitionTo('books'));
  }
}

});
