import DS from 'ember-data';

export default DS.Model.extend({
	editor: DS.belongsTo('editor'),
	kid: DS.belongsTo('kid'),
	type: DS.attr('string'),
	percentage: DS.attr('number'),
});
