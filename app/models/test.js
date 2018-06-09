import DS from 'ember-data';

export default DS.Model.extend({
	pregunta: DS.hasMany('question'),
	nino: DS.belongTo('kid'),
	editor: DS.belongTo('editor')

});
