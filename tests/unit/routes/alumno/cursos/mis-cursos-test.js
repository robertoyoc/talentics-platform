import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | alumno/cursos/mis-cursos', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:alumno/cursos/mis-cursos');
    assert.ok(route);
  });
});
