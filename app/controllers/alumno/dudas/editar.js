import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
	currentUser: service(),
  actions: {
    guardar(duda) {
      duda.save().then(() => {
        alert("Se han guadado los cambios.")
        this.transitionToRoute('alumno.dudas')
      })
    },
    borrar(duda) {
      if (confirm("¿Seguro que quieres elimniar tu duda?")) {
        this.get('currentUser.account').then((account) => {
          let nino = account.get('info')
            nino.get('doubts').then((dudasNino) => {
              dudasNino.removeObject(duda)
              nino.save().then(() => {
              	duda.destroyRecord().then(()=>{
              		alert('Se ha borrado tu duda')
                this.transitionToRoute('alumno.dudas')
              	}) 
              })
            })
       

        })
      }

    }
  }
});
