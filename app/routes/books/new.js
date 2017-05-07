import Ember from 'ember';

export default Ember.Route.extend({

  // isTitleValid: Ember.computed.empty('title'),
  // isPriceValid: Ember.computed.empty('price'),
  // isPublisherValid: Ember.computed.empty('publisher'),
  // isValid: Ember.computed.and('isTitleValid', 'isPriceValid','isPublisherValid'),
  // isDisabled: Ember.computed.not('isValid'),


  model(){
  return Ember.RSVP.hash({
    books: this.store.createRecord('book'),
    authors: this.store.findAll('author')
    // this.store.find('author', params)

    })
  },

  actions:
  {
    saveBook(book){
    //   let name = this.get('author').peekRecord('name', params);
    //   let books = this.get('book').createRecord('book', {
    //   name: name
    //   });
    // //book.save();
      book.save().then(() => this.transitionTo('books'));
    }
  }

});
