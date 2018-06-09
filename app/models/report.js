import DS from 'ember-data';

export default DS.Model.extend({
	reportador: DS.attr('string'),
	reportado: DS.attr('string'),
	texto: DS.attr('string')

});
