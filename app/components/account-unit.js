import Component from '@ember/component';

export default Component.extend({
	actions:{
	save(account){
		account.save().then(()=>{
			this.sendAction('guardado')
		})
	}
}
});
