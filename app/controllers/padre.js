import Controller from '@ember/controller';
import {inject as service} from '@ember/service'

export default Controller.extend({
	currentUser: service(),
	session: service(),
	actions:{
		logout(){
			this.get('session').close().then(()=>{
				this.transitionToRoute('dir')
			})
		}
	}
});
