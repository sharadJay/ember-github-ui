import { test } from 'qunit';
import moduleForAcceptance from 'github-ui/tests/helpers/module-for-acceptance';
import Pretender from 'pretender';
var server;

moduleForAcceptance('Acceptance | end to end',{
  beforeEach: function(){
    function json(obj, status=200) {
      return [status, { 'Content-Type' : 'text/json'}, JSON.stringify(obj)];
    }
    server = new Pretender(function(){
      this.get('https://api.github.com/orgs/:id',
        () => json({
          id: 99,
          login: 'emberjs',
          name: 'Ember.js'
        }));
      this.get('https://api.github.com/orgs/:id/:repoid',
        () => json([{
          id: 123,
          name: 'data'
        }]));
      this.get('https://api.github.com/repos/:id/:repoid',
        () => json({
          id: 123,
          name: 'data'
        }));
      this.get('https://api.github.com/repos/:id/:repoid/issues',
        () => json([
          {id: 1, title: 'Issue 1'},
          {id: 2, title: 'Issue 2'}
        ]));
      this.get('https://api.github.com/repos/:id/:repoid/contributors',
        () => json([
          {id: 1, login: 'contributor1'},
          {id: 2, login: 'contributor2'}
        ]));
    });
  },
  afterEach: function() {
    console.log("After each");
  }
});

test('visiting /end-to-end', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/orgs',"Index page is redirected to org");
  });

  click(".github-org>a")

  andThen(() => {
    assert.equal(currentURL(),'/org/emberjs/repos',"On click github org repos is displayed");
  })
});
