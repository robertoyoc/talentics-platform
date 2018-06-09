import DS from 'ember-data';

export default DS.Model.extend({
	pregunta: DS.hasMany('question'),
	nino: DS.belongsTo('kid'),
	editor: DS.belongsTo('editor')

});
