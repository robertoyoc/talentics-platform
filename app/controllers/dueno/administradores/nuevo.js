import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { isBlank } from '@ember/utils';


export default Controller.extend({
  firebaseApp: service(),
  currentUser: service(),
  session: service(),
  wrongPass: false,

  
  actions: {
    cancelar() {
      this.get('model').destroyRecord()
      this.transitionToRoute('dueno.administradores.index')
    },
    registrar() {

      let dueno = this.get('firebaseApp').auth().currentUser
      let cntx = this
      let admin = this.get('model')

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
          console.log(pass.toString())

          return this.get('firebaseApp').auth().signInWithEmailAndPassword(dueno.email, pass.toString()).then(() => {

            let ref = cntx.get('firebaseApp').auth()
            let pswd = '123123'
            ref.createUserWithEmailAndPassword(admin.email, pswd).then((userData) => {
              return cntx.get('session').open('firebase', {
                provider: 'password',
                'email': admin.email,
                'password': pswd
              }).then((usuario) => {
                return admin.save().then((user) => {
                  return cntx.store.createRecord('account', {
                    //id: usuario.uid,
                    uid: usuario.uid,
                    infoID: user.id,
                    perfil: 'admin'
                  }).save().then(() => {

                    return cntx.get('session').close().then(() => {
                      return cntx.get('session').open('firebase', {
                        provider: 'password',
                        email: dueno.email,
                        password: pass.toString()
                      }).then(() => {

                      })
                    })
                  })
                })
              })
            })


          }).catch((e) => {
            console.log(e)
            cntx.set('wrongPass', true)
          })
        },
        allowOutsideClick: () => !swal.isLoading()
      }).then((result) => {
        console.log(cntx.get('wrongPass'))
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
            'Administrador registrado',
            'Se ha registrado un nuevo adminsitrador.',
            'success').then(() => {
            cntx.transitionToRoute('dueno.administradores.index')
          })

        }
      })
    }
  }

});
