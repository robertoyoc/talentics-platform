import DS from 'ember-data';

export default DS.Model.extend({
	fecha: DS.attr('number'),
	asesoria: DS.belongsTo('advisory'),
	mensaje: DS.hasMany('message'),
	archMsj: DS.hasMany('file-message'),
});
