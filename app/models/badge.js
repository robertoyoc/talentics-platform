import DS from 'ember-data';

export default DS.Model.extend({
	course: DS.belongsTo('course'),
	type: DS.attr('string'),
	date: DS.attr('number'),
	description: DS.attr('string'),
});
