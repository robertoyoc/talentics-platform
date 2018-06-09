import DS from 'ember-data';

export default DS.Model.extend({
	padre: DS.belongsTo('father'),
	monto: DS.attr('number')
});
