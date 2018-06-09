import DS from 'ember-data';

export default DS.Model.extend({
	account: DS.belongsTo('account'),
	date: DS.attr('number'),
});
