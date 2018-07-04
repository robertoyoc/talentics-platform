import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		save(newName, newContent, newCourse) {
			let curso = this.get('model')
			console.log(curso)
			this.store.createRecord('class', {
				name: newName,
				content: newContent,
				course: newCourse
			}).save().then((clase) => {
				return curso.get('clases').then((clases) => {
					clases.pushObject(clase)
					return clases.save().then(() => {
						curso.save().then(() => {
							this.transitionToRoute('editor.cursos.clases', curso.id)
						})
					})
				})
			})
		}
	}
});
