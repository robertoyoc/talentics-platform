import DS from 'ember-data';

export default DS.Model.extend({
	test: DS.hasMany('test'),
	beca: DS.hasMany('scholarship'),
	curso: DS.belongTo('course')

});
