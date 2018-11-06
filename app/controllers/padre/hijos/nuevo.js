import Controller from '@ember/controller';
import {inject as service} from '@ember/service'

export default Controller.extend({
	currentUser: service(),
	actions: {
	  onGuardado(kid){
	  	this.get('currentUser.account').then((account)=>{
	  		let padre = account.get('info');

	  		kid.set('father', padre)

	  		kid.save().then((kidSaved)=>{
	  			padre.get('kids').then((kids)=>{
	  				kids.pushObject(kid)

	  				padre.save().then(()=>{
	  					this.transitionToRoute('padre.hijos.index')
	  				})
	  			})
	  		})
	  	})
	  	
	  }
	}
});
