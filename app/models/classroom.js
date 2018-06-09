import DS from 'ember-data';

export default DS.Model.extend({
	nombre: DS.attr('string'),
	fecha: DS.attr('number'),
	asesoria: DS.hasMany('advisory'),
	duda: DS.hasMany('doubt'),
	solicitudDeAsesoria: DS.belongsTo('tutoring-request'),
	nino: DS.belongsTo('kid'),
	profe: DS.belongsTo('teacher'),
});
