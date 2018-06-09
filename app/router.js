import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});


Router.map(function() {
  this.route('dueno', function() {
    this.route('administradores', function() {
      this.route('nuevo');
      this.route('editar', {path: '/editar/:account_id'});
    });
  });
});

export default Router;
