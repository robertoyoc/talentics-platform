import DS from 'ember-data';

export default DS.Model.extend({
	
	nombre: DS.attr('string'),
	apellido: DS.attr('string'),
	fechaNacimiento: DS.attr('number'),
	padre: DS.belongsTo('father'),
	tutoringRequest: DS.hasMany('tutoring-request'),
	duda: DS.hasMany('doubt'),
	salon: DS.hasMany('classroom'),
	areaInteres: DS.hasMany('interest-area'),
	claseGrupal: DS.hasMany('group-class'),
	cusro: DS.hasMany('course'),
	test: DS.hasMany('test'),
	beca: DS.hasMany('scholarship')


});
