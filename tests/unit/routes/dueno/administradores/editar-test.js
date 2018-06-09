import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | dueno/administradores/editar', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:dueno/administradores/editar');
    assert.ok(route);
  });
});
