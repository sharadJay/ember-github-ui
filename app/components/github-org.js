import Ember from 'ember';
import isInArray from 'github-ui/utils/is-in-array';

export default Ember.Component.extend({

  isFavorited: isInArray('org','favorites.items'),

  tagName: "li",

  favorites: Ember.inject.service(),

  actions: {
    itemFavorited(){
      const org = this.get("org.id");

      if(this.get('favorites.items').indexOf(org) < 0){
        this.get('favorites').favoriteItem(org);
      } else {
        this.get('favorites').unFavoriteItem(org);
      }

      this.get('favorites').log();
    }

  }
});
