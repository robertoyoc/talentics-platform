import DS from 'ember-data';

export default DS.Model.extend({
	kid: DS.belongsTo('kid'),
	father: DS.belongsTo('father'),
	class: DS.belongsTo('class'),
	requestDate: DS.attr('number'),
	approval: DS.attr('boolean'),
	tema: DS.attr('string'),
	comentarios: DS.attr('string')
});
