import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | padre/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:padre/index');
    assert.ok(route);
  });
});
