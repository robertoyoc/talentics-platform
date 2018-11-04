import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  currentUser: service(),
  actions: {
    cancelar() {
      this.get('model').destroyRecord();
      this.transitionToRoute('alumno.asesorias')
    },
    guardar(asesoria) {
      this.get('currentUser.account').then((account) => {
        let nino = account.get('info')

        asesoria.set('kid', nino)
        asesoria.save().then((asesoriaSaved) => {
          nino.get('tutoringRequest').then((asesoriasNino) => {
            asesoriasNino.pushObject(asesoriaSaved)
            nino.save().then(() => {
              asesoria.get('teacher').then((teacher) => {
                teacher.get('tutorings').then((tutorings) => {
                  tutorings.pushObject(asesoriaSaved)
                  teacher.save().then(() => {
                    alert("Tu asesoría ha sido agendada")
                    this.transitionToRoute('alumno.asesorias')
                  })
                })
              })

            })
          })
        })
      })
    }
  }
});
