import Controller from '@ember/controller';
import {inject as service} from '@ember/service'

export default Controller.extend({
	session: service(),
	actions:{
		login(){
			let email = this.get('email')
			let pswd = this.get('pswd')	

			this.get('session').open('firebase', {
				provider: 'password',
				email: email,
				password: pswd
			}).then((usuario) => {
				return this.transitionToRoute('dir')

			}).catch((error) => {
				switch (error.code) {
					case "auth/user-not-found":
						alert('Usuario no encontrado')
						break;
					case "auth/wrong-password":
						alert('Correo o contraseña incorrecta')
						break;
					case "auth/too-many-requests":
						alert('Demasiadas peticiones.')
					case "auth/invalid-email":
						alert('Correo no válido.')


				}

			})


		},
		signin(){
			this.transitionToRoute('signin')
		}
	}
});
