import DS from 'ember-data';

export default DS.Model.extend({
	nombre: DS.attr('string'),
	fecha: DS.attr('number')
	asesoria: DS.HasMany('advisory'),
	duda: DS.HasMany('doubt'),
	solicitudDeAsesoria: DS.belogsTo('tutoring-request'),
	nino: DS.belogsTo('kid'),
	profe: DS.belogsTo('teacher'),
});
