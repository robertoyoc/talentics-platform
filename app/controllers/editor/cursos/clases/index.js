import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		onDelete(curso, clase) {
			swal({
			  title: 'Confirmación',
			  text: "Esta acción no se puede deshacer.",
			  type: 'warning',
			  showCancelButton: true,
			  confirmButtonColor: '#3085d6',
			  cancelButtonColor: '#d33',
			  confirmButtonText: 'Eliminar',
				cancelButtonText: 'Cancelar'
			}).then((result) => {
				if (result.value) {
					curso.get('clases').then((clases) => {
						clases.removeObject(clase);
						clases.save().then(() => {
							curso.save().then(() => {
								clase.destroyRecord();
							})
						})
					}).then(()=>{
						swal(
				      'Éxito',
				      'La clase ha sido eliminada del curso.',
				      'success'
				    )
					})
			  }
			})
		}
	}
});
