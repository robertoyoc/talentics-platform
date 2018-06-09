import Route from '@ember/routing/route';

export default Route.extend({
	beforeModel(){
	
		// this.store.createRecord('account', {
		// 	nombre: 'Roberto',
		// 	apellido: 'Yoc',
		// 	uIdPerfil: 'asdasdasd',
		// 	dato: 'Esto no se va a guardar'
		// }).save()
	}
});
