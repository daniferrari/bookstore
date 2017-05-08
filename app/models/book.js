import DS from 'ember-data';


export default DS.Model.extend({


    isTitleValid: Ember.computed.notEmpty('title'),
    isPriceValid: Ember.computed.match('price', /^[0-9]/),
    isPublisherValid: Ember.computed.notEmpty('publisher'),
    isValid: Ember.computed.and('isTitleValid', 'isPriceValid','isPublisherValid'),
    isDisabled: Ember.computed.not('isValid'),

    title: DS.attr('string'),
    price: DS.attr('number'),
    author: DS.belongsTo('author', {inverse: 'books'}),
    publisher: DS.attr('string')

});
