import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		onGuardado(){
			this.transitionToRoute('editor.becas.index')
		}
	}
});
