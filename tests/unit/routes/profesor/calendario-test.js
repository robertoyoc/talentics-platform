import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | profesor/calendario', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:profesor/calendario');
    assert.ok(route);
  });
});
