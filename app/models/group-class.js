import DS from 'ember-data';

export default DS.Model.extend({
	kid: DS.hasMany('kid'),
	profesor: DS.belongsTo('profesor')


});
