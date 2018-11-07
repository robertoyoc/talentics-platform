import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		onCancel(clase) {
			clase.get('course').then((curso)=>{
				this.transitionToRoute('editor.cursos.clases', curso.id);
			})
		},
		onSave(clase) {
			clase.save().then(() => {
				this.send('onCancel', clase);
			})
		}
	}
});
