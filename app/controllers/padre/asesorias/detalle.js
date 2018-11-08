import Controller from '@ember/controller';

export default Controller.extend({
	actions:{
		autorizar(asesoria){
			asesoria.set('approval', true)
			asesoria.save().then(()=>{
				alert("La asesoria ha sido aprovada.")
			})
		}
	}
});
