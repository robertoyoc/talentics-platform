import DS from 'ember-data';

export default DS.Model.extend({
	test: DS.hasMany('test'),
	beca: DS.hasMany('scholarship'),
	curso: DS.belongsTo('course'),
	name: DS.attr('string'),
	lastName: DS.attr('string'),
	email: DS.attr('string')
});
