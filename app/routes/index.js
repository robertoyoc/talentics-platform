import Route from '@ember/routing/route';

export default Route.extend({
	beforeModel()
	{

		this.store.createRecord('account',
		{
			nombre: 'Don'
			apellido: 'Gama'
			uIdPerfil 'El Diablo'
		})
	}
});
