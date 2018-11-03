import Controller from '@ember/controller';
import {inject as service} from '@ember/service'
export default Controller.extend({
	firebaseApp: service(),
	session: service(),
	actions:{
		signin(model){
			let ref = this.get('firebaseApp').auth()
			let pswd = model.pswd
			ref.createUserWithEmailAndPassword(model.email, pswd).then((userData) => {
				return this.get('session').open('firebase', {
					provider: 'password',
					'email': model.email,
					'password': pswd
				}).then((usuario) => {
					return model.save().then((user) => {
						return this.store.createRecord('account', {
							//id: usuario.uid,
							uid: usuario.uid,
							infoID: user.id,
							perfil: 'father'
						}).save().then(() => {
							
								return this.get('session').close().then(() => {
									return this.transitionToRoute('login')
								})
							

						})
					})
				})
			})
		},
		cancelar(model){
			model.destroyRecord();
			this.transitionToRoute('dir')
		}
	}
});
