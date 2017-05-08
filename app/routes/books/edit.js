import Ember from 'ember';

export default Ember.Route.extend({

  model(params){
  return Ember.RSVP.hash({
    book: this.store.findRecord('book', params.book_id),
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
