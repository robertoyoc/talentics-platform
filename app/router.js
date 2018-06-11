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
  this.route('padre', function() {
    this.route('hijo', function() {
      this.route('nuevo');
      this.route('editar', {path: '/editar/:kid_id'});
    });
    this.route('balance', function() {
      this.route('detalle');
      this.route('pagar');
      this.route('cancelar');
      this.route('suscripcion');
    });

    this.route('hijos', function() {
      this.route('detalle');
    });
    this.route('asesorias', function() {
      this.route('nuevo');
      this.route('editar');
      this.route('detalle');
    });
    this.route('profesores', function() {
      this.route('detalle');
      this.route('explorar');
    });
    this.route('quejas', function() {
      this.route('detalle');
    });
    this.route('becas', function() {
      this.route('detalle');
      this.route('iniciar');
    });
    this.route('kits', function() {
      this.route('detalle');
    });
  });
});

export default Router;
