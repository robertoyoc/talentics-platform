import Component from '@ember/component';

export default Component.extend({
  actions: {
    eliminar() {
      this.onDelete();
    }
  }
});
