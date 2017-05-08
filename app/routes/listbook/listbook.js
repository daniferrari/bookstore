import Ember from 'ember';

export default Ember.Route.extend({

model(){

  return this.store.findAll('book');
},

actions: {
  deleteBook(book) {
    let confirmation = confirm('Are you sure?');
    if (confirmation) {
      book.destroyRecord();
    }
  }
}

});
