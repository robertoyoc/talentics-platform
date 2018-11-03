import Component from '@ember/component';

export default Component.extend({
	actions:{
		guardar(){
			this.onGuardar()
			
		},
		cancelar(){
			this.onCancelar()
		}
	}
});
