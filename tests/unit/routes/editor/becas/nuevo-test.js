import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | editor/becas/nuevo', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:editor/becas/nuevo');
    assert.ok(route);
  });
});
