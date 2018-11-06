import Component from '@ember/component';
import { inject as service } from "@ember/service";

export default Component.extend({
	store: service(),
	
	actions: {
		cancelar(){
			this.onCancel();
		},

		guardar(curso) {
			let name = this.get('name');
			let content = this.get('classContent');
			this.get('store').createRecord('class', {
				name: name,
				content: content,
				course: curso
			}).save().then((clase) => {
				return curso.get('clases').then((clases) => {
					clases.pushObject(clase)
					return clases.save().then(() => {
						this.onSave();
					})
				})
			})
		}
	}
});
