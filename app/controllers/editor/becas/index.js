import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		borrar(beca){
			beca.destroyRecord()
		
		},
		nuevaBeca(){
			this.transitionToRoute('editor.becas.nuevo')
		}
	}
});
