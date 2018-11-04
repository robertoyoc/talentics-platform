import DS from 'ember-data';

export default DS.Model.extend({
	
	name: DS.attr('string'),
	lastName: DS.attr('string'),
	email: DS.attr('string'),
	birthday: DS.attr('number'),
	father: DS.belongsTo('father'),
	tutoringRequest: DS.hasMany('tutoring-request'),
	doubts: DS.hasMany('doubt'),
	classroom: DS.hasMany('classroom'),
	interestArea: DS.hasMany('interest-area'),
	groupClass: DS.hasMany('group-class'),
	course: DS.hasMany('course'),
	test: DS.hasMany('test'),
	scholarship: DS.hasMany('scholarship')


});
