import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | dueno/admins/editar', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:dueno/admins/editar');
    assert.ok(route);
  });
});
