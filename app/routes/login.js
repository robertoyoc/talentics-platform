import Route from '@ember/routing/route';
import {inject as service} from '@ember/service'

export default Route.extend({
	currentUser: service(),
	beforeModel(transition) {

		return this.get('session').fetch().then(() => {
			transition.abort()
			return this.transitionTo('dir')
		}).catch(() => {


		})

	}
});
