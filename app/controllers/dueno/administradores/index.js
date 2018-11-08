
import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		nuevo(){
			this.transitionToRoute('dueno.administradores.nuevo')
		},
		delete(cuenta){
			cuenta.destroyRecord()
		}
	}
});
