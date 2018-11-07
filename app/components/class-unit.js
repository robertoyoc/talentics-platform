import Component from '@ember/component';

export default Component.extend({
	actions: {
		cancelar(){
			this.onCancel();
		},

		guardar(curso) {
			this.onSave();
		}
	}
});
