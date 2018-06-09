import DS from 'ember-data';
export default DS.Model.extend({
	autor: DS.attr('string'),
	texto: DS.attr('string')

});
