import DS from 'ember-data';

export default DS.Model.extend({
	payments: DS.hasMany('payment'),
	tutoring-requests: DS.hasMany('tutoring-request'),
	kids: DS.hasMany('kid'),
	name: DS.attr('string'),
	apellido: DS.attr('string'),
	birthday: DS.attr('number')
});
