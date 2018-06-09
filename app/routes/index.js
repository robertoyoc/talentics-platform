import Route from '@ember/routing/route';

export default Route.extend({
	beforeModel(){
		// this.store.createRecord('account', {
		// 	nombre: 'Joshua',
		// 	apellido: 'Esperilla',
		// 	uIdPerfil: 'Chew',
		// 	dato: 'Esto no se va a guardar'
		// }).save()
	}
});
