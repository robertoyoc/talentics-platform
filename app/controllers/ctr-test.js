import Controller from '@ember/controller';

export default Controller.extend({
	clicks: 0,
	numero: '',
	actions: {
		alerta(param){
			alert(param)
			this.set('texto', param)

		},
		click(){
			
				this.set('clicks', this.get('clicks')+1)
			
		},

		calcular(parametro){
			this.set('numero', this.get('numero')+parametro)
		},

		borrar(){
			this.set('numero', '')
		},
		suma(){
			this.set('numero', Number(this.get('numero'))+1)
		},

		resta(){
			this.set('numero', Number(this.get('numero'))-1)
		}


	}
});
