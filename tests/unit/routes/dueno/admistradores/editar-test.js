import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | dueno/admistradores/editar', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:dueno/admistradores/editar');
    assert.ok(route);
  });
});
