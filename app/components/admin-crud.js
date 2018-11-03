import Component from '@ember/component';

export default Component.extend({
	actions:{
		cancelar(){
			this.onCancelar();
		},
		guardar(){
			this.onGuardar();
		}
	}
});
