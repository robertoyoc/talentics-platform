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
