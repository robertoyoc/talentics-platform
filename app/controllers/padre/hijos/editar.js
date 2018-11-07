import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
	  onGuardado(kid){
	  	kid.save().then(()=>{
	  		this.transitionToRoute('padre.hijos.index')
	  	})
	  	
	  },
	  onCancelar(kid){
	  	kid.rollbackAttributes();
	  	this.transitionToRoute('padre.hijos.index')
	  }
	}
});
