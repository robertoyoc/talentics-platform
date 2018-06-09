import DS from 'ember-data';

export default DS.Model.extend({
<<<<<<< HEAD
	cursos: DS.hasMany('course'),
	nombre: DS.attr('atring')
=======
	admin: DS.hasMany('admin')
>>>>>>> a28a4e3f4284efd4938aa94439cac75c6a8d8f6e

});
