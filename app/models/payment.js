import DS from 'ember-data';
import {computed} from '@ember/object';

export default DS.Model.extend({
	father: DS.belongsTo('father'),
	amount: DS.attr('number'),
	description: DS.attr('string'),
	deposit: DS.attr('number'),
	pDate: DS.attr('number'),
	balance: computed('deposit', 'amount', function(){
		return this.amount - this.deposit;
	})
});
