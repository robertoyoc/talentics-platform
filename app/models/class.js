import DS from 'ember-data';

export default DS.Model.extend({
	curso: DS.belongsTo('course')
});
