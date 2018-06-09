import DS from 'ember-data';

export default DS.Model.extend({
	nombre: DS.attr('string'),
	apellido: DS.attr('string'),
	uIdPerfil: DS.attr('number'),
	reporte: DS.belongsTo('reoport'),
	queja: DS.belongsTo('complaint'),
	notificacion: DS.HasMany('notification'),
});
