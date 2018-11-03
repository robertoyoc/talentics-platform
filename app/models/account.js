import DS from 'ember-data';

export default DS.Model.extend({
	uid: DS.attr('string'),
	perfil: DS.attr('string'),
	infoID: DS.attr('string')
});
