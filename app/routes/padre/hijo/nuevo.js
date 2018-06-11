import Route from '@ember/routing/route';

export default Route.extend({
	actions: {
	  onGuardado(){
	  	this.transitionToRoute('padre.hijo.index')
	  }
	}
});
