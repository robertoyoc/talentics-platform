import DS from 'ember-data';

export default DS.Model.extend({
	fecha: DS.attr('number'),
	file: DS.attr('number'),
	mensaje: DS.belongsTo('message')
	tipo: DS.attr('string')
});
