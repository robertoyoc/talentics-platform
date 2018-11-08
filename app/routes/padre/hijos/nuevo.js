import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import {inject as service} from '@ember/service'


export default Route.extend({
	currentUser: service(),
	model(){
		return RSVP.hash({
			kid: this.store.createRecord('kid'),
			father: this.get('currentUser.account').then((account)=>{
				return account.get('info')
			})
		})
	}
});
