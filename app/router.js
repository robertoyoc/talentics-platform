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
      this.route('editar', {path: '/editar/:account_id'});
    });
  });
  this.route('profesor', function() {
    this.route('perfil', function() {
      this.route('editar');
      this.route('areas', function() {
        this.route('nuevo');
        this.route('editar');
      });
    });
    this.route('horarios', function() {
      this.route('nuevo');
      this.route('editar');
    });
    this.route('asesorias', function() {
      this.route('solicitudes');
      this.route('explorar');
      this.route('historial');
    });
    this.route('alumnos', function() {
      this.route('detalle');
      this.route('comentario');
    });
    this.route('calendario', function() {
      this.route('detalle');
    });
    this.route('reportes', function() {
      this.route('nuevo');
      this.route('editar');
    });
    this.route('cursos', function() {
      this.route('certificados');
      this.route('opiniones', function() {
        this.route('nuevo');
      });
    });
    this.route('balance', function() {
      this.route('detalle');
    });
  });
});

export default Router;
