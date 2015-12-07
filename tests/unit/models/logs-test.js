import { moduleForModel, test } from 'ember-qunit';

moduleForModel('logs', 'Unit | Model | logs', {
  // Specify the other units that are required for this test.
  needs: ['model:log-type', 'model:user']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
