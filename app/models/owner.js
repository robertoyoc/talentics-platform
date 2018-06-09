import DS from 'ember-data';

export default DS.Model.extend({
	nombreDueno: DS.attr('string'),
	apellidoDueno: DS.attr('string'),
});
