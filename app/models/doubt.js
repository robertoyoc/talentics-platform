import DS from 'ember-data';

export default DS.Model.extend({
	nino: DS.belongsTo('kid'),
	archivo: DS.attr('string'),
	texto: DS.attr('string'),
	descripcion: DS.attr('string'),
	materia: DS.attr('string'),
	


});
