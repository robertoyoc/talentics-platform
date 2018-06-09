import DS from 'ember-data';

export default DS.Model.extend({
	kit: DS.belongsTo('kit'),
	padre: DS.belongsTo('father'),
	nino: DS.belongsTo('kid')

});
