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
    this.route('hijos', function() {
      this.route('nuevo');
      this.route('editar', {path: 'editar/:kid_id'});
    });
  });
  this.route('admin', function() {
    this.route('cursos', function() {
      this.route('detalle');
      this.route('clases', function() {
        this.route('detalle');
      });
    });
    this.route('becas', function() {
      this.route('detalle');
      this.route('aprobar');
    });
    this.route('usuarios', function() {
      this.route('detalle');
      this.route('suspender');
      this.route('expediente');
      this.route('balance');
    });
  });
});

export default Router;
