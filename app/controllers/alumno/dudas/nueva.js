import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  currentUser: service(),
  actions: {
    cancelar() {
      this.get('model').destroyRecord()
      this.transitionToRoute('alumno.dudas')
    },
    guardar() {
      let duda = this.get('model')
      this.get('currentUser.account').then((account) => {
        let nino = account.get('info')
                  duda.set('kid', nino)
          duda.save().then((dudaSaved) => {
            nino.get('doubts').then((dudasNino) => {
              dudasNino.pushObject(dudaSaved)
              nino.save().then(() => {
                alert('Se ha registrado tu duda')
                this.transitionToRoute('alumno.dudas')
              })
            })
          })

      })
    }
  }
});
