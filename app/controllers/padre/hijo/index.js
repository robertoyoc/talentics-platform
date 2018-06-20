import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		delete(nino){
			nino.destroyRecord()
		}
	}

});
