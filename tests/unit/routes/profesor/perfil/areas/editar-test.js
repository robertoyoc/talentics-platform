import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | profesor/perfil/areas/editar', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:profesor/perfil/areas/editar');
    assert.ok(route);
  });
});
