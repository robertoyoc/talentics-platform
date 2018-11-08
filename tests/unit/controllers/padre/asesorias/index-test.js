import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | padre/asesorias/index', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:padre/asesorias/index');
    assert.ok(controller);
  });
});
