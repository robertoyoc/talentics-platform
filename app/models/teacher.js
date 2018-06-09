import DS from 'ember-data';

export default DS.Model.extend({
	nombreProfesor: DS.attr('string'),
	apellidoProfesor: DS.attr('string'),
	trabajo: DS.hasMany('job'),
	especializacion: DS.attr('string'),
});
