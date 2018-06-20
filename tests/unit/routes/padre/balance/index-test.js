import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | padre/balance/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:padre/balance/index');
    assert.ok(route);
  });
});
