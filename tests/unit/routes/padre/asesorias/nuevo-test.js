import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | padre/asesorias/nuevo', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:padre/asesorias/nuevo');
    assert.ok(route);
  });
});
