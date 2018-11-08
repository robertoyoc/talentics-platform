import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    detalle(asesoria) {
      this.transitionToRoute('padre.asesorias.detalle', asesoria.id)
      //console.log(asesoria)
    },
    autorizar(asesoria) {
      if (confirm("¿Autorizar asesoría?")) {
        asesoria.set('approval', true)
        asesoria.save().then(() => {
          alert('Asesoría autorizada.')
        })
      }

    }
  }
});
