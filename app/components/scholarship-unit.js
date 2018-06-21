import Component from '@ember/component';

export default Component.extend({
	actions: {
		saveScholarchip (scholarship){
			scholarship.save().then(()=>{
				this.sendAction('guardado')
			})
		}
	}
});
