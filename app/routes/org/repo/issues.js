import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let orgName = this.modelFor('org').id;
    let repoName = this.modelFor('org.repo').repoid;
    return $.get(`https://api.github.com/repos/${orgName}/${repoName}/issues`).then((data) => {
      data.map(issue => {
        issue.oldId = issue.id;
        issue.id = issue.title;
      });
      return data;
    });
  }
});
