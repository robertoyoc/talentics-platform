import Route from '@ember/routing/route';

export default Route.extend({
	model(){
		let cuenta=this.get('currentUser.account.infoID');
		return this.store.query('tutoringRequest', {
            teacher: cuenta,
          })
	}
});
