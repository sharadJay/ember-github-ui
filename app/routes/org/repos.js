import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    let orgName = this.modelFor('org').id;
    return $.get(`https://api.github.com/orgs/${orgName}/repos`).then((data) => {
      data.map(repo => {
        repo.oldId = repo.id;
        repo.id = repo.name;
      });
      return data;
    });
  },
  actions:{
    saveClickedRepoName(repoId){
      this.set("repoName",repoId);
    }
  }
});
