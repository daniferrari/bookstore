import DS from 'ember-data';


export default DS.Model.extend({

  isValid: Ember.computed.notEmpty('name'),
  isDisabled: Ember.computed.not('isValid'),

    name: DS.attr('string'),
    books: DS.hasMany('book')
});
