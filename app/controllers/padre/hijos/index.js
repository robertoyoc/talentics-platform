import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		delete(cuenta){
			cuenta.destroyRecord()
		},
		ver(kid){
			this.transitionToRoute('padre.hijos.detalle', kid.id)
		}
	}
});
