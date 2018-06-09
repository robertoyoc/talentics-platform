import DS from 'ember-data';

export default DS.Model.extend({
	asesoria: DS.belongsTo('advisory'),
	fechaInicio: DS.attr('number'),
	fechaFinal: DS.attr('number'),
	duracion: DS.attr('number'),
	nombreNino: DS.attr('string'),
	nombreProfesor: DS.attr('string'),
});
