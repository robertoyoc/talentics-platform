import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
			delete(cuenta){
				cuenta.destroyRecord()
			}
	}
});
