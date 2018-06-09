import DS from 'ember-data';

export default DS.Model.extend({
	
	fileMessage: DS.belongsTo('file-message'),
	texto: DS.attr('string'),
	chat: DS.belongsTo('chat'),
	fecha: DS.attr('number')

});
