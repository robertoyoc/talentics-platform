import Route from '@ember/routing/route';
import {inject as service} from '@ember/service'

export default Route.extend({
	currentUser: service(),
	beforeModel(transition) {
		return this.get('currentUser.account').then((account) => {
			let perfil = 'login';
			transition.abort()

			if (account) {
				switch(account.get('perfil')){
					case 'father':
						perfil = 'padre';
						break;
					case 'owner':
						perfil = 'dueno';
						break;
					case 'editor':
						perfil = 'editor';
						break;
					case 'kid':
						perfil = 'alumno';
						break;
					case 'admin':
						perfil = 'admin';
						break;
					case 'teacher':
						perfil = 'profesor';
						break;
				}


				return this.replaceWith(perfil);

			} else{
				return this.replaceWith('login');
			}
		}).catch(()=>{
			return this.replaceWith('login');
		})
	}
});
