import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		onCancel() {
			this.transitionToRoute('editor.cursos.index');
		},
	  onSave(model){
	  	model.save().then(()=>{
				this.send('onCancel');
			})
	  }
	}
});
