import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | dueno/kits/enviar', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:dueno/kits/enviar');
    assert.ok(route);
  });
});
