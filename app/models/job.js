import DS from 'ember-data';

export default DS.Model.extend({
	profesor: DS.belongsTo('teacher'),
	descripcionTrabajo: DS.attr('string'),
});
