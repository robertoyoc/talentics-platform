import DS from 'ember-data';

export default DS.Model.extend({
	respuestas: DS.hasMany('answer'),
	test: DS.belongsTo('test')


});
