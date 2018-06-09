import DS from 'ember-data';

export default DS.Model.extend({
	nombre: DS.attr('string'),
	curso: DS.HasMany('course'),
	solicitud: DS.HasMany('kit-request'),

});
