import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	lastName: DS.attr('string'),
	jobs: DS.hasMany('job'),
	specialization: DS.attr('string'),
	tutorings: DS.hasMany('tutoring-request')
});
