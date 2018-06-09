import DS from 'ember-data';

export default DS.Model.extend({
	classroom: DS.belongsTo('classroom'),
	chat: DS.belongsTo('chat'),
	videollamadas: DS.hasMany('videocall')

});
