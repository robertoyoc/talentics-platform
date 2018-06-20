import Component from '@ember/component';

export default Component.extend({
	actions: {

	  guardar(course){
	  	course.save().then(()=>{
	  		this.sendAction('guardado')
	  	})
	  }
	}
});
