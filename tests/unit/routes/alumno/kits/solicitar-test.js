import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | alumno/kits/solicitar', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:alumno/kits/solicitar');
    assert.ok(route);
  });
});
