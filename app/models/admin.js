import DS from 'ember-data';

export default DS.Model.extend({
	cursos: DS.hasMany('course'),
	nombre: DS.attr('string'),
	admin: DS.hasMany('admin')

});
