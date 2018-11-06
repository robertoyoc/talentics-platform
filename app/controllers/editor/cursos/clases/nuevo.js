import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		onCancel(curso) {
			this.transitionToRoute('editor.cursos.clases', curso.id);
		},
		onSave(model){
			model.save().then(()=>{
				this.send('onCancel', model);
			})
		}
	}
});
