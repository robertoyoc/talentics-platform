import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | profesor/alumnos/detalle', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:profesor/alumnos/detalle');
    assert.ok(route);
  });
});
