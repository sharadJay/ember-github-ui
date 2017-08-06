
import { niceNumber } from 'github-ui/helpers/nice-number';
import { module, test } from 'qunit';

module('Unit | Helper | nice number');

// Replace this with your real tests.
test('it works', function(assert) {
  assert.equal(niceNumber([42]) ,"42","Double digit returns double digit");
  assert.equal(niceNumber([4200]) ,"4.2k","4200 returns 4.2k");
  assert.equal(niceNumber([42000]) ,"42k","4200 returns 42k");
});

