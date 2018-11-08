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
        asesoria.set('requestDate', 123)
        asesoria.save().then((asesoriaSaved) => {
          nino.get('tutoringRequest').then((asesoriasNino) => {
            asesoriasNino.pushObject(asesoriaSaved)
            nino.save().then(() => {
              asesoria.get('teacher').then((teacher) => {
                teacher.get('tutorings').then((tutorings) => {
                  tutorings.pushObject(asesoriaSaved)
                  teacher.save().then(() => {
                    nino.get('father').then((father) => {
                      father.get('tutoringRequests').then((asesorias) => {
                        asesorias.pushObject(asesoriaSaved)
                        father.save().then(() => {
                          asesoriaSaved.set('father', father)
                          asesoriaSaved.save().then(() => {
                            alert("Tu asesoría ha sido agendada")
                            this.transitionToRoute('alumno.asesorias')
                          })
                        })
                      })
                    })
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
