import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		save(clase) {
			clase.save().then(() => {
				this.transitionToRoute('editor.cursos.clases', clase.course)
			})
		}
	}
});
