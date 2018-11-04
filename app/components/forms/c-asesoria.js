import Component from '@ember/component';

export default Component.extend({
	selectedTeacher: null,
	actions:{
		guardar(){
			if(!this.get('selectedTeacher')){
				return alert("Tienes que seleccionar un profesor")
			}
			this.onGuardar();
		},
		selectTeacher(teacher){

			this.set('selectedTeacher', teacher)
			this.get('model').set('teacher', teacher)
		}
	}
});
