import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | editor/becas/editar', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:editor/becas/editar');
    assert.ok(route);
  });
});
