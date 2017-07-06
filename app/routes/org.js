import Ember from 'ember';

export default Ember.Route.extend({

  model(params){
    return $.get(`https://api.github.com/orgs/${params.id}`).then(data => {
      data.oldId = data.id;
      data.id = data.login;
      return data;
    });
  },
  actions: {
    error(error) {
      if (error.status === 404) {
        this.intermediateTransitionTo('org.notfound');
        return false;
      } else {
        return true;
      }
    }
  }
});
