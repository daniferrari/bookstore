import Ember from 'ember';

export default Ember.Route.extend({


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
