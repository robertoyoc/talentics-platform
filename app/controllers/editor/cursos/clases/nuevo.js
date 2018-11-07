import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		onCancel(curso) {
			this.transitionToRoute('editor.cursos.clases', curso.id);
		},
		onSave(curso) {
			let name = this.get('name');
			let content = this.get('classContent');
			this.store.createRecord('class', {
				name: name,
				content: content,
				course: curso
			}).save().then((clase) => {
				return curso.get('clases').then((clases) => {
					clases.pushObject(clase)
					return clases.save().then(() => {
						curso.save().then(()=>{
							this.send('onCancel', curso);
						})
					})
				})
			})
		}
	}
});
