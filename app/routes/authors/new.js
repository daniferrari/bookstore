import Ember from 'ember';

export default Ember.Route.extend({


  // isNameValid: Ember.computed.empty('name'),
  // isDisabled: Ember.computed.not('isNameValid'),


  model(){
    return this.store.createRecord('author');
  },

  actions:
  {
    saveAuthor(author){
      author.save().then(() => this.transitionTo('authors'));
    }
  }

});
