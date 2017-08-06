import isInArray from 'github-ui/utils/is-in-array';
import { module, test } from 'qunit';

module('Unit | Utility | is in array');

// Replace this with your real tests.
test('When item is not in the list', function(assert) {
  const Type = Ember.Object.extend({
    item: 6,
    itemArray: [1,2,4],
    isInItemList: isInArray('item','itemArray')
  });
  const obj = Type.create();
  assert.equal(obj.get('isInItemList'),false,"Item is not in the list");
});

test('When item is in the list', function(assert) {
  const Type = Ember.Object.extend({
    item: 2,
    itemArray: [1,2,4],
    isInItemList: isInArray('item','itemArray')
  });
  const obj = Type.create();
  assert.equal(obj.get('isInItemList'),true,"Item is in the list");
});

test('When item in the list is changed', function(assert) {
  const Type = Ember.Object.extend({
    item: 12,
    itemArray: [1,2,4],
    isInItemList: isInArray('item','itemArray')
  });
  const obj = Type.create();
  assert.equal(obj.get('isInItemList'),false,"Item is not in the list");
  obj.set('item',2);
  assert.equal(obj.get('isInItemList'),true,"the value was autocomputed and set to 2");
});
