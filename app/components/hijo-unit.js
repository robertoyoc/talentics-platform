import Component from '@ember/component';

export default Component.extend({
	actions: {

	  guardar(kid){
	  	kid.save().then(()=>{
	  		this.sendAction('guardado')
	  	})
	  }
	}
});
