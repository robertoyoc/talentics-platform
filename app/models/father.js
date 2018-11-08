import DS from 'ember-data';
import {computed} from '@ember/object';

export default DS.Model.extend({
	payments: DS.hasMany('payment'),
	tutoringRequests: DS.hasMany('tutoring-request'),
	kids: DS.hasMany('kid'),
	name: DS.attr('string'),
	lastName: DS.attr('string'),
	birthday: DS.attr('number'),
	email: DS.attr('string'),
	partialDebts: computed('payments.@each.balance', function () {
		return this.payments.mapBy('balance');
	}),
	totalDebts: computed.sum('partialDebts')
});
