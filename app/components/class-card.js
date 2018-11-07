import Component from '@ember/component';
import { computed } from '@ember/object';
export default Component.extend({
  dynamicSegments: computed('course', 'class', function(){
    return {
      'class_id': this.get('class.id'),
      'course_id': this.get('course.id')
    };
  }),

  actions: {
    eliminar() {
      this.onDelete();
    }
  }
});
