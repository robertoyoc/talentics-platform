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
    this.route('admins', function() {
      this.route('nuevo');
      this.route('editar');
    });
    this.route('reportes', function() {
      this.route('usuarios');
      this.route('gastos');
      this.route('ingresos');
      this.route('satisfaccion');
    });
    this.route('kits', function() {
      this.route('agregar');
      this.route('enviar');
    });
  });

  this.route('padre', function() {
    this.route('hijos', function() {
      this.route('nuevo');
      this.route('editar', {path: 'editar/:kid_id'});
    });
  });

  this.route('editor', function() {
    this.route('cursos', function() {
      this.route('nuevo');
      this.route('editar');
      this.route('clases', function() {
        this.route('nuevo');
        this.route('editar');
      });
    });
  });
  this.route('alumno', function() {
    this.route('dudas', function() {
      this.route('nueva');
      this.route('editar');
    });
    this.route('tests', function() {
      this.route('aplicar');
    });
    this.route('areas', function() {
      this.route('editar');
    });
    this.route('asesorias', function() {
      this.route('solicitar');
      this.route('videollamada');
    });
    this.route('cursos', function() {
      this.route('mis-cursos');
      this.route('clases', function() {
        this.route('actividad');
        this.route('aplicar');
      });
    });
    this.route('kits', function() {
      this.route('solicitar');
    });
  });
});

export default Router;
