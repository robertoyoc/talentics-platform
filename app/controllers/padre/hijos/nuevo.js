import Controller from '@ember/controller';
import { inject as service } from '@ember/service'

export default Controller.extend({
  firebaseApp: service(),
  currentUser: service(),
  session: service(),
  wrongPass: false,

  actions: {
    onGuardado(kid) {


      //let padre = this.get('firebaseApp').auth().currentUser
      let padre = this.get('model.father')
      let cntx = this


      kid.set('father', padre)

      //let credential = this.get('firebaseApp').auth().EmailAuthProvider.AuthCredential.getCredential(ciudadano.email, this.get('password'))
      //console.log(firebase.auth().EmailAuthProvider)
      // debugger
      window.swal({
        title: 'Introduce tu contraseña para continuar.',
        input: 'password',
        showCancelButton: true,
        confirmButtonText: 'Submit',
        showLoaderOnConfirm: true,
        preConfirm: (pass) => {


          return this.get('firebaseApp').auth().signInWithEmailAndPassword(padre.email, pass.toString()).then(() => {
            kid.save().then((kidSaved) => {

              padre.get('kids').then((kidsPadre) => {
                kidsPadre.pushObject(kidSaved)
                padre.save().then(() => {

                  let ref = cntx.get('firebaseApp').auth()
                  let pswd = '123123'
                  ref.createUserWithEmailAndPassword(kid.email, pswd).then((userData) => {

                    return kid.save().then((user) => {


                      return cntx.store.createRecord('account', {
                        //id: usuario.uid,
                        uid: userData.uid,
                        infoID: user.id,
                        perfil: 'kid'
                      }).save().then(() => {

                        return cntx.get('session').close().then(() => {
                          return cntx.get('session').open('firebase', {
                            provider: 'password',
                            email: padre.email,
                            password: pass.toString()
                          }).then(() => {

                          })
                        })
                      })
                    })

                  })

                })
              })
            })

          }).catch((e) => {

            cntx.set('wrongPass', true)
          })
        },
        allowOutsideClick: () => !swal.isLoading()
      }).then((result) => {

        if (cntx.get('wrongPass')) {
          window.swal(
            'Contraseña incorrecta',
            'La contraseña que ingresó es incorrecta',
            'error'
          ).then(() => {
            cntx.set('wrongPass', false)
          })
        } else {
          window.swal(
            'Hijo(a) registrado',
            'Se ha registrado con éxito a su hijo(a).',
            'success').then(() => {
            cntx.transitionToRoute('padre.hijos.index')
          })

        }
      })


    },
    onCancelar(kid) {
      kid.destroyRecord()
      this.transitionToRoute('padre.hijos.index')
    }
  }
});
