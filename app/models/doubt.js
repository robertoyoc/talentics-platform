import DS from 'ember-data';

export default DS.Model.extend({
	kid: DS.belongsTo('kid'),
	file: DS.attr('string'),
	text: DS.attr('string'),
	description: DS.attr('string'),
	subject: DS.attr('string'),
	


});
