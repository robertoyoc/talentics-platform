import Component from '@ember/component';

export default Component.extend({
	actions: {
		save(clase) {
			clase.save().then(() => {
				this.sendAction('guardado')
			})
		}
	},


});
