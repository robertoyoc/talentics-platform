import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		borrar(clase) {

			let curso = this.get('model')

			curso.get('clases').then((clases) => {
				clases.removeObject(clase)
				clases.save().then(() => {
					curso.save().then(() => {
						clase.destroyRecord()
					})
				})
			})

		}
	}
});
