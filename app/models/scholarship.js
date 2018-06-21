import DS from 'ember-data';

export default DS.Model.extend({
	editor: DS.belongsTo('editor'),
	kids: DS.hasMany ('kid'),
	type: DS.attr('string'),
	percentage: DS.attr('number'),
	university: DS.attr('string')
});
