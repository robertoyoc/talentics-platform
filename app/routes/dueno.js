import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  currentUser: service(),
  beforeModel(transition) {
    this.set('transition', transition);

    return this.get('session').fetch().catch(() => {
      if (!this.get('session.currentUser.uid')) {
        transition.abort();
        this.transitionTo('dir');
      }
    }).then(this.lookForTransition.bind(this)).catch(this.lookForTransition.bind(this));
  },

  lookForTransition() {
    return this.get('currentUser.account').then((account) => {
      this.set('account', account);
      if (account.get('perfil') != 'owner') {
        this.get('transition').abort();
        return this.transitionTo('dir');
      }
    })
  }
});
