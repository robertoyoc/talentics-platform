import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | profesor/asesorias/historial', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:profesor/asesorias/historial');
    assert.ok(route);
  });
});
