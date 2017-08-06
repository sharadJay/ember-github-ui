import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('github-org', 'Integration | Component | github org', {
  integration: true
});

test('it renders', function (assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.set('o', {
    id: "ember"
  });
  this.set('favorites', {'items': ['']});
  this.render(hbs`{{github-org org=o}}`);
  assert.equal(this.$().text().trim(), `[favorite]

ember`, 'ember favorite is displayed as text');

  this.$('span.favorite').click();
  assert.equal(this.$().text().trim(), `[unfavorite]

ember`, 'ember unfavorite is displayed as text');
});
