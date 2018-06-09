import Component from '@ember/component';

export default Component.extend({
	actions: {
	  guardar(account){

	  	account.save().then(()=>{
	  		this.sendAction('guardado')
	  	})
	  }
	}
});
