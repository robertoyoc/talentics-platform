import Component from '@ember/component';

export default Component.extend({
	actions: {
		guardar(cuenta){
			cuenta.save().then(()=>{
				this.sendAction('guardado')
			})
		}

	}
});
