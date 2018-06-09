import DS from 'ember-data';

export default DS.Model.extend({
	nino: DS.belongsTo('kid'),
	admin: DS.belongsTo('admin'),
	profesor: DS.belongsTo('teacher'),
	certificacion: DS.belongsTo('certification'),
	editores: DS.hasMany('editor'),
	clases: DS.hasMany('class'),
	kit: DS.belongsTo('kit'),
	badges: DS.hasMany('badge'),
	nombre: DS.attr('string')
});
