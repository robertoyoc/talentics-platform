import { Promise as EmberPromise } from 'rsvp';
import { computed } from '@ember/object';
import { alias } from '@ember/object/computed';
import Service, { inject as service } from '@ember/service';
import DS from 'ember-data'

export default Service.extend({
	session: service(),
	store: service(),
	_account: "false",

	isAuthenticated: alias('session.isAuthenticated'),

	account: computed('isAuthenticated', '_account', {
		get() {
			return this.get('session').fetch().then(this.findAccount.bind(this)).catch(this.findAccount.bind(this))
		}

	}),
	findAccount() {
		if (this.get('isAuthenticated')) {
			return DS.PromiseObject.create({
				promise: this.get('store').query('account', {
					orderBy: 'uid',
					equalTo: this.get('session.currentUser.uid'),
					limitToLast: 1
				}).then(this.selector.bind(this))
			})
		} else return null

	},
	selector(account) {
		return this.lookForData(account.get('firstObject'))
	},
	lookForData(account) {
		return this.get('store').findRecord(account.get('perfil'), account.get('infoID')).then((info) => {
			account.set('info', info)
			return account
		})

	}

});
