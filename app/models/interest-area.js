import DS from 'ember-data';

export default DS.Model.extend({
	nino: DS.belongsTo('kid'),
	nombreArea: DS.attr('string'),
	descripcionArea: DS.attr('string'),
});
