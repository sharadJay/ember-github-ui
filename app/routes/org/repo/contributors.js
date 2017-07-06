import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    let orgName = this.modelFor('org').id;
    let repoName = this.modelFor('org.repo').repoid;
    return $.get(`https://api.github.com/repos/${orgName}/${repoName}/contributors`).then((data) => {
      data.map(issue => {
        issue.oldId = issue.id;
        issue.id = issue.login;
      });
      return data;
    });
  }
});
