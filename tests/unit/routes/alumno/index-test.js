import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | alumno/index', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:alumno/index');
    assert.ok(route);
  });
});
