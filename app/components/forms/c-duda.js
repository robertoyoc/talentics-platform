import Component from '@ember/component';

export default Component.extend({
	actions:{
		guardar(){
			this.onGuardar();
		},
		borrar(){
			this.onBorrar();
		}
	}
});
