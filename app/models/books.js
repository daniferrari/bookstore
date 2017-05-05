import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({

    title: DS.attr('string'),
    price: DS.attr('number'),
    author: DS.belongsTo('author'),
    publisher: DS.attr('string')

});
