import DS from 'ember-data';

export default DS.Model.extend({
	profesor: DS.hasMany('profesor')

});
