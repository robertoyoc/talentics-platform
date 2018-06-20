import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | alumno/cursos/clases/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:alumno/cursos/clases/index');
    assert.ok(route);
  });
});
