import Controller from '@ember/controller';

export default Controller.extend({
	actions:{
		detalle(beca){
			this.transitionToRoute('padre.becas.detalle', beca.id)
		}
	}
});
